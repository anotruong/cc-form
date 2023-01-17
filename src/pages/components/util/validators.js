import {useContext} from 'react';
import { InputContext } from '../context/inputContext';
import { CC_FORMAT } from './formatHandlers';

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

const numLength = (numOfChar, val) => String(val).length === numOfChar;
const notAlpha = (val) => val.split('').filter(char => char.match(/[\s\d]/)).join('');

export const Validate = (value, validators) => { 
  const { setMonthError, setYearError } = useContext(InputContext);

  let isValid = true;
  let lengthOfVal;

  validators = validators[0];

  for (const type in validators) {
    
    if (validators[type] === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }

    if (validators[type] === VALIDATOR_TYPE_CC) {
      let filteredValue = CC_FORMAT(value);

      filteredValue = notAlpha(filteredValue);
      lengthOfVal = 19;

      isValid = isValid && numLength(lengthOfVal, filteredValue);
    }

    if (validators[type] === VALIDATOR_TYPE_MONTH) {
      let month = /[0]{1}[0-9]{1}/.test(value) || /[1]{1}[0-2]{1}/.test(value) ? true : false;

      isValid = isValid && month;
      setMonthError(isValid);
    }

    if (validators[type] === VALIDATOR_TYPE_YEAR) {
      lengthOfVal = 2;

      isValid = isValid && numLength(lengthOfVal, value);
      setYearError(isValid);
    }

    if (validators[type] === VALIDATOR_TYPE_CVC) {
      lengthOfVal = 3;
      
      isValid = isValid && numLength(lengthOfVal, value);
    }
  }
  return isValid;
};