'use strict'

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const Auth = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  compareHash: { type: String, unique: true},
}, {timestamps: true})

Auth.methods.generatePasswordHash = function(password) {
    if(!password) return Promise.reject(new Error('Authorization Failed. Password required.'))
  // hash the password so they're not stored in plain text
    return bcrypt.hash(password, 10)
    .then(hash => this.password = hash)
    .then(() => this)
    .catch(err => err)
}

Auth.methods.comparePasswordHash = function(password) {
  // compare the user's password with the hashed password in the DB
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if(err) return reject(err)
      if(!valid) return reject(new Error('Authorization Failed. Password Invalid.'))
      resolve(this)
    })
  })
}

Auth.methods.generateCompareHash = function() {
  // creates a unique hash for creating and comparing password
  this.compareHash = crypto.randomBytes(32).toString('hex')
  return this.save()
  .then(() => Promise.resolve(this.compareHash))
  .catch(() => this.generateCompareHash.bind(this))
}

Auth.methods.generateToken = function() {
  return this.generateCompareHash()
  .then(compareHash => jwt.sign({token: compareHash}, process.env.APP_SECRET))
  .catch(err => err)
}

module.exports = mongoose.model('auth', Auth)