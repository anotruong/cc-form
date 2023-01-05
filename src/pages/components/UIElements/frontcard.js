import React from 'react';
// import Inputs from '../formElements/input.js';
// Eventually real time change the dummy name of the front card to match the name on the form.

import '../stylesheets/frontcard.css';

/*
Import 'input' and pull the placeholder from the thing. */

// let placeholder;

// console.log(Inputs);

const FrontCard = props => {

  return (
    <div className="front-card">
      <div className="big-circle" />
      <div className="small-circle" />
      <p className="ccNumber">0000 0000 0000 0000</p>
      <p className="cardholder">Jane Appleseed </p>
      <p className="expDate">00/00</p>
    </div>
  )
};



export default FrontCard;