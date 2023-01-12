import React, { useContext, useState } from 'react'; 
import { InputContext } from '../context/inputContext';
import '../../stylesheets/button.css';

// let completed = false;

const Button = props => {
  //true false, has form completed? 

  let [ buttonName, setButtonName ] = useState('confirm')
  let { formCompleted, setFormCompleted } = useContext(InputContext);

  const clickHandler = (event) => {
    event.preventDefault();
    // console.log(prop)
    try {
      if (!formCompleted) {
      //if form is false then corce to true
        setFormCompleted(true);
      } else {
        setFormCompleted(false);
      }

      formCompleted ? setButtonName('confirm') : setButtonName('continue');

    console.log(formCompleted)
  } catch(error) {
    console.log(error)
  }
    // return null;
  }

  return (
    <button 
      // className={'submit'}
      // type={props.type} 
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  )
};

export default Button;