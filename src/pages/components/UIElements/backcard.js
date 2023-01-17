import React, {useContext} from 'react';
import { InputContext } from '../context/inputContext';

import '../../stylesheets/backcard.css';

const BackCard = () => {

  const {securityNum} = useContext(InputContext);

  return (
    <div id="back-card">
      <p id="cvc-number">{securityNum}</p>
    </div>
  )
}

export default BackCard;