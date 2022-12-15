import React from 'react';
import './input.js';

const Input = props => {
  const element = props.element === 'input' ? (
        <input 
          id={props.id} 
          type={props.type} 
          placeholder={props.placeholder} 
        />
      ) : false;

  return (
    <div className={'form-control'}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  )
};

export default Input;