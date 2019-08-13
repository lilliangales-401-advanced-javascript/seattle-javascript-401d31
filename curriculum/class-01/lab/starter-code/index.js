'use strict';

const validator = require('./lib/validator');


// Vinicio - add some code here to be able to use the module using console.log

// console.log('I am going to test if a value is one');
// console.log(validator.isValid(11, 'one'));
// console.log(validator.isValid(1, 'one'));
//
// console.log('I am going to test if a value is negative');
// console.log(validator.isValid(12, 'negative'));
// console.log(validator.isValid(-12, 'negative'));
//
// console.log('I am going to test if a value is odd');
// console.log(validator.isValid(2, 'odd'));
// console.log(validator.isValid(3, 'odd'));
//
let personOne = {hair: {color: 'blue', length: 'long'}};
//
// console.log('I am going to test if a value is a property');
// console.log(validator.isValid('ben'));

console.log(validator.isObjectProperty(personOne.hair, 'color'));

