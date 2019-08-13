'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /



// if you need to setup more complex rules, remember that rules can be an object too
validator.isValid = (input, rules) => {


  if(rules === 'positive') {
    // I'm checking if the value is greater than zero, because the user wants to
    // check if the value is positive
    return input > 0;
  }
  if(rules === 'negative') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return input < 0;
  }


};



/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNum = (input) => {
  return typeof input === 'number';
};


validator.isObjectProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};

validator.isObjectValid = (data, schema) => {
    Object.keys(schema.fields).forEach(property => {
        if(!data.hasOwnProperty(property)){
        return false;
      }
    });
    return true;
};