import React, {useContext} from 'react';
import { InputContext } from '../context/inputContext';

import '../../stylesheets/frontcard.css';


const FrontCard = () => {
  const {cardHolder, ccNum, month, year} = useContext(InputContext);

  return (
    <div id="front-card">
      <div id="big-circle" />
      <div id="small-circle" />
      <p id="ccNumber">{ccNum}</p>
      <p id="cardholder">{cardHolder}</p>
      <p id="expDate">{month + '/' + year}</p>
    </div>
  )
};

export default FrontCard;