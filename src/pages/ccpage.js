import React, {useState} from 'react';
import Forms from './components/forms/forms';
import FrontCard from './components/UIElements/frontcard';
import BackCard from './components/UIElements/backcard';

import {InputContext} from './components/context/inputContext';

import './stylesheets/ccpage.css';

const CCPage = () => {
  const [cardHolder, setCardHolderName] = useState("Jane Appleseed");
  const [ccNum, setCCNum] = useState("0000 0000 0000 0000");
  const [month, setExpMonth] = useState("00");
  const [year, setExpYear] = useState("00");
  const [securityNum, setSecurityNum] = useState("000");
  const [formCompleted, setFormCompleted] = useState(false)
  const [monthError, setMonthError] = useState(true);
  const [yearError, setYearError] = useState(true);

  return(
    <div className="ccform">
      <InputContext.Provider value={{
        cardHolder, setCardHolderName, 
        ccNum, setCCNum, 
        month, setExpMonth, 
        year, setExpYear, 
        securityNum, setSecurityNum,
        formCompleted, setFormCompleted,
        monthError, setMonthError,
        yearError, setYearError
      }} >
        <div className="card-container">
          <BackCard />
          <FrontCard />
        </div>
        <div className="form-container">
          <Forms />
        </div>
      </InputContext.Provider>
    </div> 
  )
};

export default CCPage;
