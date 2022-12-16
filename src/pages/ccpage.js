import React from 'react';
import Forms from './components/forms';
import FrontCard from './components/UIElements/frontcard';
import BackCard from './components/UIElements/backcard';

import './components/stylesheets/ccpage.css';

const CCPage = () => {
  return(
    <div className="ccform">
      <BackCard />
      <FrontCard />
      <Forms />
    </div> 
  )
};

export default CCPage;
