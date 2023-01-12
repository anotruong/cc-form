import React, { useContext } from 'react';
import Button from '../UIElements/button';
import checkIcon from '../../images/icon-complete.svg';
import { InputContext } from '../context/inputContext';

import '../../stylesheets/completion.css';

const CompletedPage = () => {
  const { setFormCompleted } = useContext(InputContext);

  return (
    // <div id='completed-container'>
      <div id='completed-flex'>
      {/* <div className='form-control'> */}
      {/* completed page, includes icon-complete image. */}
        <img src={checkIcon} alt='check-icon'/>
        {/* <br/> */}
        <h1>THANK YOU!</h1>
        <h3>We've added your card details</h3>
      {/* </div> */}
      </div>
    // </div>  
  );
}

export default CompletedPage;