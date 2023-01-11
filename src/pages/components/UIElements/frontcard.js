import React, {useContext, useEffect} from 'react';
// import Inputs from '../formElements/input.js';
// Eventually real time change the dummy name of the front card to match the name on the form.
// import {extractedInputState} from '../formElements/input';
// import PlaceholderHandler from '../util/placeholder';
import {CC_FORMAT} from '../util/formatHandlers';
import { InputContext } from '../../context/inputContext';

import '../../stylesheets/frontcard.css';


const FrontCard = () => {
  const {cardHolder, ccNum, month, year} = useContext(InputContext);

  // setInterval(() => {
  // you can't use the placeholder attribute with any other element other then <input>
  //solution: create a function that provides a placeholder if there is no argument passed in.
    return (
      <div id="front-card">
        <div id="big-circle" />
        <div id="small-circle" />
        <p id="ccNumber">{ccNum}</p>
        <p id="cardholder">{cardHolder}</p>
        <p id="expDate">{month + '/' + year}</p>
      </div>
    )
  // }, 5000)
};



export default FrontCard;