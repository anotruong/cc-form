// import React from 'react';

//multiple validators.
/*

name
  START 'name' parameter
  EVALUATE if 'name' is an empty string.
    FAIL or PASS 

mm/yy
  START 'mm' and 'yy' parameters
  EVALUATE if 'mm' is within 1-12 and 'yy' is within the last 80 years,
  FAIL or PASS 

cvc
  START 'cvc' parameter
  EVALUATE 'cvc' is has a length of 3 and is numerical.
  FAIL or PASS 

card number:
  START 'numbers' parameter
  EVALUATE if the value of 'numbers' is equal to a length of 16 
    FAIL return false
    PASS return true
  */

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_CC = 'CC'; 
const VALIDATOR_TYPE_MONTH = 'MONTH'; 
const VALIDATOR_TYPE_YEAR = 'YEAR';
const VALIDATOR_TYPE_CVC = 'CVC';

export const VALIDATOR_REQUIRED = () => ({type: VALIDATOR_TYPE_REQUIRE});
export const VALIDATOR_CC = () => ({type: VALIDATOR_TYPE_CC});
export const VALIDATOR_MONTH = () => ({type: VALIDATOR_TYPE_MONTH});
export const VALIDATOR_YEAR = () => ({type: VALIDATOR_TYPE_YEAR});
export const VALIDATOR_CVC = () => ({type: VALIDATOR_TYPE_CVC});

export const validate = (value, validators) => {
  const numLength = (numOfChar) => String(value).length === numOfChar;

  let isValid = true;
  // console.log(validators)
  // console.log(validators[0])
  validators = validators[0];

  for (const type in validators) {
    
    if (validators[type] === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validators[type] === VALIDATOR_TYPE_CC) {
      //pass value through spacing function. trim the excessive in the function.
      isValid = isValid && numLength(16);
      // isValid = 'It works'
    }
    if (validators[type] === VALIDATOR_TYPE_MONTH) {
      
      let month = /[0]{1}[0-9]{1}/.test(value) || /[1]{1}[0-2]{1}/.test(value) ? true : false;
      isValid = isValid && month;
    }
    if (validators[type] === VALIDATOR_TYPE_YEAR) {
      isValid = isValid && numLength(2);
    }
    if (validators[type] === VALIDATOR_TYPE_CVC) {
      isValid = isValid && numLength(3);
    }
  }
  // console.log(isValid)
  return isValid;
};