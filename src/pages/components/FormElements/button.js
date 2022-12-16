import React from 'react'; 
import '../stylesheets/button.css';

const Button = props => {
  return (
    <button 
      className={'submit'}
      type={props.type} >
      {props.children}
    </button>
  )
};

export default Button;