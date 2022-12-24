import React, {useReducer} from 'react';
// import {VALIDATION_REQUIRED} from '../validator/validators';

import '../stylesheets/input.css';

const inputReducer = (state, action) => {
  //we define the prop 'action' to have a 'type' and 'val' property.
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        // This spread syntax + 'state' copies the existing state into this new object.
        value: action.val,
        isValid: true
      };
    default:
      return state;
  }
}

const Input = props => {

  const [inputState, dispatch] = useReducer(inputReducer, {value: "", isValid: false});

  const changeHandler = event => {
    //store the values and validate

    //We have to pass in an 'action' prop, which was defined in function `inputReducer'.
    dispatch({type: 'CHANGE', val: event.target.value})
    //'event' is an object we get automatically on the change event. 
    // 'even.target' is the input element which the event was triggered. 
    // 'value' is the value that the user entered/
  };

  const numOfFields = props => {
    if (props.placeholder === "MM" || props.placeholder === "YY") {
      return (
        <input 
          id={props.id} 
          className={"small-field"}
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={changeHandler}
          value={inputState.value}
        />
      );
    } else if (props.label === 'cvc') {
      return (
        <input 
          id={props.id} 
          className={"medium-field"}
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={changeHandler}
          value={inputState.value}
         />
      );
    } else {
      return (
        <input 
          id={props.id} 
          className={"long-field"}
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={changeHandler}
          value={inputState.value}
        />
      );
    }

  }
  const element = numOfFields(props);

  return (
    <div className={`form-input ${!inputState.isValid && 'form-input---invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* {!inputState.isValid && <p>{props.errorText}</p>} */}
    </div>
  )
};

export default Input;