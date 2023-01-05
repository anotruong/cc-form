import React, {useState, useReducer} from 'react';
import {validate} from '../util/validators.js';
import {CC_FORMAT} from '../util/formatHandlers';
import '../stylesheets/input.css';

const inputReducer = (state, action) => {
  //we define the prop 'action' to have a 'type' and 'val' property.
  switch (action.type) {
    case 'CHANGE':
      // console.log(state);
      // console.log(action.validators)
      console.log({
        ...state,
        // This spread syntax + 'state' copies the existing state into this new object.
        value: CC_FORMAT(action.val),
        isValid: validate(action.val, action.validators),
        isFormatted: CC_FORMAT(action.val)
      });
      return {
        ...state,
        // This spread syntax + 'state' copies the existing state into this new object.
        value: action.val,
        isValid: validate(action.val, action.validators),
        // isFormatted: CC_FORMAT(action.val)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      }
    }
    default:
      return state;
  }
}

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "", 
    isTouched: false,
    isValid: false,
    isFormatted: false
  });
  // const [inputValue, setInputValue] = useState("");

  const {id, onInput} = props;
  const {value, isValid} = inputState;

  const changeHandler = event => {
    //store the values and validate
    // console.log(props)

    //We have to pass in an 'action' prop, which was defined in function `inputReducer'.
    dispatch({
      type: 'CHANGE', 
      val: event.target.value, 
      validators: props.validators
    })
    //'event' is an object we get automatically on the change event. 
    // 'even.target' is the input element which the event was triggered. 
    // 'value' is the value that the user entered/

    // if (id === "ccInfo") {
    //   let formattedCC = CC_FORMAT(event.target.value);
    //   // console.log(formattedCC)
    //   setInputValue(formattedCC);
    // }

    // console.log(useState(''))
  };
  // console.log(useState(''))

  const touchHandler = () => {
    dispatch({
      type:'TOUCH'
    })
  }

  const numOfFields = props => {
    if (props.placeholder === "MM" || props.placeholder === "YY") {
      return (
        <input 
          id={props.id} 
          className={"small-field"}
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={changeHandler}
          onBlur={touchHandler}
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
          onBlur={touchHandler}
          value={inputState.value}
          // setInputValue={touchHandler}
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
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
    }

  }
  const element = numOfFields(props);
  // console.log(element);
  return (
    <div className={`form-input ${!inputState.isValid && inputState.isTouched &&
      'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* {!inputState.isValid && <p>{props.errorText}</p>} */}
    </div>
  )
};

export default Input;