import React from 'react';
// import Inputs from './inputs.js';
// Eventually real time change the dummy name of the front card to match the name on the form.

import '../stylesheets/frontcard.css';

const FrontCard = props => {

  return (
    <div className="front-card">
      <div className="big-circle" />
      <div className="small-circle" />
      <h3 className="ccNumber">0000-0000-0000-0000</h3>
      <p className="cardholder">first and last</p>
      <p className="expDate">00/00</p>
    </div>
  )
};



export default FrontCard;