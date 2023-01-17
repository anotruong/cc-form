import React, { useContext, useReducer } from 'react';
import { Validate } from '../util/validators.js';
import { CC_FORMAT } from '../util/formatHandlers';
import { InputContext } from '../context/inputContext.js';
import '../../stylesheets/input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: Validate(action.val, action.validators),
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
    id: props.id,
    value: "", 
    isTouched: false,
    isValid: false,
  });

  const {
    setCardHolderName,
    setCCNum,
    setExpMonth,
    setExpYear,
    setSecurityNum
  } = useContext(InputContext);
 
  const updateStateHandler = (inputId, inputValue) => {
    if (inputId === 'name') setCardHolderName(inputValue);
    if (inputId === 'ccInfo') setCCNum(CC_FORMAT(inputValue));
    if (inputId === 'month') setExpMonth(inputValue);
    if (inputId === 'year') setExpYear(inputValue);
    if (inputId === 'security') setSecurityNum(inputValue);

    return null;
  }

  const changeHandler = event => {
    let id = event.target.id;
    let value = event.target.value;

    dispatch({
      type: 'CHANGE', 
      val: value, 
      validators: props.validators
    })

    updateStateHandler(id, value);
  };

  const touchHandler = () => {
    dispatch({
      type:'TOUCH'
    })
  }

  const fieldHandler = props => {
    let valueFormatted = inputState.value;
    if (props.id === 'ccInfo') {
      valueFormatted = CC_FORMAT(inputState.value);
    }

    return (
      <input 
        id={props.id} 
        className={props.className}
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler}
        onBlur={touchHandler}
        value={valueFormatted}
        errortext={props.errortext}
      />
    )
  }

  const element = fieldHandler(props);

  return (
    <>
      <div className={`form-input ${!inputState.isValid && inputState.isTouched &&
      'form-control--invalid'}`}>
      <label id={props.id} htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <label 
        id={'errorText'}
        className={props.id}
        >
          {props.errortext}
        </label>}
      </div>
    </>
  )
};

export default Input;