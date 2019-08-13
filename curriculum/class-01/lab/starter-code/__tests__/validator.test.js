'use strict';

const validator = require('../lib/validator.js');

describe('validator must test if the number is positive', () => {
  it('checks if number is positive', () => {
    expect(validator.isValid(1,'positive')).toBeTruthy();
  });
});

describe('validator must test if the number is negative', () => {
  it('checks if number is negative', () => {
    expect(validator.isValid(-1,'negative')).toBeTruthy();
  });
});



describe('validate if the input is a string', () => {
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x: 'y'};
  let func = () => {
  };
  let bool = false;

  it('valid strings', () => {

    expect(validator.isString(str)).toBeTruthy();
  });
  it ('invalid strings', () => {
    let invalidData = [1, [], {}, () => {}, true];

    for(let invalidValue of invalidData) {
      expect(validator.isString(invalidValue)).toBeFalsy();
    }
  });
});

describe('validate if the input is a number', () => {
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x: 'y'};
  let func = () => {
  };
  let bool = false;

  it ('valid numbers', () => {
    expect(validator.isNum(num)).toBeTruthy();
  });
  it ('invalid numbers', () => {
    let invalidData = ['yes', [], {}, () => {}, true];

    for(let invalidValue of invalidData) {
      expect(validator.isNum(invalidValue)).toBeFalsy();
    }
  });
});


describe('#isOjectValid', () => {
  test('regular cases', () => {
    const schema = {
    fields: {
        id: {type: 'string'},
        age: {type: 'number'},
        favToy: {type: 'object'}
      },
     };
     expect(validator.isObjectValid({id: 'a', age: 1, favoriteToys: {}}, schema)).toEqual(true);
    });
   });


describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    let personOne = {hair: {color: 'blue', length: 'long'}};
    let personTwo = {hair: 'blue'};
    expect(validator.isObjectProperty(personOne.hair, 'color')).toBeTruthy();
    expect(validator.isObjectProperty(personTwo.hair, 'color')).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    let personOne = {hair: {color: 'blue', length: 'long'}};
    let personTwo = {hair: 'blue'};
    expect(validator.isString(personTwo.hair)).toBeTruthy();
  });

  // it('validates the types of values contained in an array', () => {
  //   // i.e. an array of all strings or numbers
  //   expect(true).toBeFalsy();
  // });
  //
  // it('validates a value array against an approved list', () => {
  //   // i.e. a string might only be allowed to be "yes" or "no"
  //   expect(true).toBeFalsy();
  // });

  // TODO: Cover so, so many more cases

});

