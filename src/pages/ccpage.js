import React from 'react';
import Forms from './components/forms';
import FrontCard from './components/UIElements/frontcard';
import BackCard from './components/UIElements/backcard';

import './components/stylesheets/ccpage.css';

const CCPage = () => {
  return(
    <div className="ccform">
      <div className="card-container">
        <BackCard />
        <FrontCard />
      </div>
      <div className="form-container">
        <Forms />
      </div>
    </div> 
  )
};

export default CCPage;
