import React, { useCallback, useContext, useReducer } from 'react';
import CompletedPage from './completion';
import Input from '../UIElements/input';
import { InputContext } from '../context/inputContext';
import Button from '../UIElements/button';
import { 
  VALIDATOR_REQUIRED, 
  VALIDATOR_CC, 
  VALIDATOR_MONTH, 
  VALIDATOR_YEAR, 
  VALIDATOR_CVC 
} from '../util/validators';

import '../../stylesheets/forms.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const Forms = () => {
  const { formCompleted, monthError, yearError } = useContext(InputContext);

  const [ dispatch ] = useReducer(formReducer, {
    inputs: {
      name: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id
    });
  }, []);

  return (
    <>
    { !formCompleted ? <form className="form-control" >
      <Input 
        id="name"
        className="long-field"
        element="input" 
        type="text" 
        label="cardholder name" 
        placeholder={'e.g. Jane Appleseed'} 
        validators={[VALIDATOR_REQUIRED()]}
        errortext={"Can't be blank"}
        onInput={inputHandler}
      />
      <Input 
        id="ccInfo"
        className="long-field"
        element="input" 
        type="text" 
        label="card number" 
        placeholder={'e.g. 1234 5678 9123 0000'}
        validators={[VALIDATOR_CC()]}
        errortext={"Wrong format, numbers only."}
        onInput={inputHandler}
      />
      <Input 
        id="month"
        className="small-field"
        element="input" 
        type="number" 
        label=""
        placeholder={'MM'}
        validators={[VALIDATOR_MONTH()]}
        errortext={""}
        onInput={inputHandler}
      />
      <Input 
        id="year"
        className="small-field"
        element="input" 
        type="number" 
        label="" 
        placeholder={'YY'}
        validators={[VALIDATOR_YEAR()]}
        errortext={""}
        onInput={inputHandler}
      />
      <Input 
        id="security"
        className="medium-field"
        element="input" 
        type="number" 
        label="cvc" 
        placeholder={'e.g 123'}
        validators={[VALIDATOR_CVC()]}
        errortext={"Can't be blank"}
        onInput={inputHandler}
      /> 
      {!monthError || !yearError ? <label id="monthYearError">Can't be blank</label> : false }
      </form> 
      : <CompletedPage />}
     {!formCompleted ? <Button id='form'/> : <Button id='completed' />}
    </>
  );
};


export default Forms;