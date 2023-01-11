import React, {useState, useMemo} from 'react';
import Forms from './components/forms';
import FrontCard from './components/UIElements/frontcard';
import BackCard from './components/UIElements/backcard';

import {InputContext} from './context/inputContext';

import './stylesheets/ccpage.css';

const CCPage = () => {
  const [cardHolder, setCardHolderName] = useState("Jane Appleseed");
  const [ccNum, setCCNum] = useState("0000 0000 0000 0000");
  const [month, setExpMonth] = useState("00");
  const [year, setExpYear] = useState("00");
  const [securityNum, setSecurityNum] = useState("000");

  // const providerValue = useMemo(() => ({cardHolder, setCardHolderName}), [cardHolder, setCardHolderName]);

  return(
    <div className="ccform">
      <InputContext.Provider value={{
        cardHolder, setCardHolderName, 
        ccNum, setCCNum, 
        month, setExpMonth, 
        year, setExpYear, 
        securityNum, setSecurityNum
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
