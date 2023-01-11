import React, {useContext, useReducer} from 'react';
import {validate} from '../util/validators.js';
import {CC_FORMAT} from '../util/formatHandlers';
import {InputContext} from '../../context/inputContext.js';
import '../../stylesheets/input.css';

const inputReducer = (state, action) => {
  //we define the prop 'action' to have a 'type' and 'val' property.
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        // This spread syntax + 'state' copies the existing state into this new object.
        value: action.val,
        isValid: validate(action.val, action.validators),
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
  //Figuring out if these are needed yet.
  // const {id, onInput} = props;
  // const {value, isValid} = inputState;

  // tester.push(inputState);

  // const {id, value, isValid} = useState(inputState);

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
    //store the values and validate
    // console.log(event.target.id);
    let id = event.target.id;
    let value = event.target.value;
    // console.log(cardHolder)
    //We have to pass in an 'action' prop, which was defined in function `inputReducer'.
    dispatch({
      type: 'CHANGE', 
      val: value, 
      validators: props.validators
    })
    //'event' is an object we get automatically on the change event. 
    // 'even.target' is the input element which the event was triggered. 
    // 'value' is the value that the user entered/
    updateStateHandler(id, value);
  };

  const touchHandler = () => {
    dispatch({
      type:'TOUCH'
    })
  }

  const fieldHandler = props => {
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
          errorText={props.errorText}
        />
      );
    } else if (props.id === 'security') {
      return (
        <input 
          id={props.id} 
          className={"medium-field"}
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
          errorText={props.errorText}
         />
      );
    } else if (props.id === 'ccInfo') {
      return (
        <input 
          id={props.id} 
          className={"long-field"}
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={changeHandler}
          onBlur={touchHandler}
          value={[CC_FORMAT(inputState.value)]}
          errorText={props.errorText}
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
          errorText={props.errorText}
        />
      );
    }
  }

  const element = fieldHandler(props);

  // console.log(cardHolder)

  return (
    <>
      <div className={`form-input ${!inputState.isValid && inputState.isTouched &&
      'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>} */}
      </div>
      {/* <div id="tester">{inputState.value}</div> */}
    </>
  )
};

export default Input;