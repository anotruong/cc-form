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
  const { formCompleted } = useContext(InputContext);

  const [ formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    //avoid an infinite loop 
      //There are no dependencies that are passed into the empty array, this is so that if component function (Forms) rerenders, the function passed into useCallback will be stored away by React.js so that no new function is create when the compoent (Forms) rerenders.
      //Manage the validity and 
    dispatch({
      type: 'INPUT_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id
    });
  }, []);

   // const SubmitHandler = event => {
  //   event.preventDefault();
  //   //send to server.
  //   console.log(formState.inputs);
  // };

  return (
    <>
    { !formCompleted ? 
    <form className="form-control" >
      <Input 
        id="name"
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
        element="input" 
        type="number" 
        label="MM" 
        placeholder={'MM'}
        validators={[VALIDATOR_MONTH()]}
        errortext={"Can't be blank"}
        onInput={inputHandler}
      />
      <Input 
        id="year"
        element="input" 
        type="number" 
        label="YY" 
        placeholder={'YY'}
        validators={[VALIDATOR_YEAR()]}
        errortext={"Can't be blank"}
        onInput={inputHandler}
      />
      <Input 
        id="security"
        element="input" 
        type="number" 
        label="cvc" 
        placeholder={'e.g 123'}
        validators={[VALIDATOR_CVC()]}
        errortext={"Can't be blank"}
        onInput={inputHandler}
      /> 
      </form> : <CompletedPage /> }
     <Button />
    {/* </form>     */}
    </>
  );
};


export default Forms;