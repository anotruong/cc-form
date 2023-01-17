import {useContext} from 'react';
import { InputContext } from '../context/inputContext';

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

export const Validate = (value, validators) => { 
  const numLength = (numOfChar) => String(value).length === numOfChar;
  const { setMonthError, setYearError } = useContext(InputContext);

  let isValid = true;
  validators = validators[0];

  for (const type in validators) {
    
    if (validators[type] === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }

    if (validators[type] === VALIDATOR_TYPE_CC) {
      isValid = isValid && numLength(19);
    }

    if (validators[type] === VALIDATOR_TYPE_MONTH) {
      
      let month = /[0]{1}[0-9]{1}/.test(value) || /[1]{1}[0-2]{1}/.test(value) ? true : false;
      isValid = isValid && month;
      setMonthError(isValid);
    }

    if (validators[type] === VALIDATOR_TYPE_YEAR) {
      isValid = isValid && numLength(2);
      setYearError(isValid);
    }

    if (validators[type] === VALIDATOR_TYPE_CVC) {
      isValid = isValid && numLength(3);
    }
  }
  return isValid;
};