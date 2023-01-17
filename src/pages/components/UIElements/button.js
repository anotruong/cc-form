import React, { useContext, useState } from 'react'; 
import { InputContext } from '../context/inputContext';
import '../../stylesheets/button.css';

const Button = props => {

  let [ buttonName, setButtonName ] = useState('confirm')
  let { formCompleted, setFormCompleted } = useContext(InputContext);

  const clickHandler = (event) => {
    event.preventDefault();

    try {
      if (!formCompleted) {
        setFormCompleted(true);
      } else {
        setFormCompleted(false);
      }

      formCompleted ? setButtonName('confirm') : setButtonName('continue');
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <button 
      id={props.id}
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  )
};

export default Button;