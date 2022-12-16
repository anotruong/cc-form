import React from 'react';
import '../stylesheets/input.css';

const numOfFields = props => {

  switch (props.label) {
    case "exp.date (mm/yy)":
      return (
        <input 
          id={props.id} 
          className={"small-field"}
          type={props.type} 
          placeholder={props.placeholder} 
        />
      );
    case "cvc":
      return (
        <input 
          id={props.id} 
          className={"medium-field"}
          type={props.type} 
          placeholder={props.placeholder} 
        />
      );
    default:
      return (
        <input 
          id={props.id} 
          className={"long-field"}
          type={props.type} 
          placeholder={props.placeholder} 
        />
      );
  }
}

const Input = props => {
  const element = numOfFields(props);
  if (props.label !== "exp.date (mm/yy)") {
    return (
      <div className={'single-input'}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
      </div>
    )
  } else {
    return (
      <div className={'dual-input'}>
        <label htmlFor={props.id}>{props.label}</label>
          {element} {element}
      </div>

    )
  }
};

export default Input;