import React from 'react';
import Input from './FormElements/input';
import Button from './FormElements/button';
import { VALIDATION_REQUIRED } from './validator/validators';

import './stylesheets/forms.css';

const Forms = () => {
  return (
    <div className="form-control">
      <Input 
        element="input" 
        type="text" 
        label="cardholder name" 
        placeholder={'e.g. Jane Appleseed'} 
        validator={VALIDATION_REQUIRED}
        errorText="Please enter a valid cardholder name"
      />
      <Input 
        element="input" 
        type="number" 
        label="card number" 
        placeholder={'e.g. 1234-5678-9123-0000'}
        validator={VALIDATION_REQUIRED}
        errorText={'Please enter a valid credit card.'}
      />
      <Input 
        element="input" 
        type="number" 
        label="exp.date (mm/yy)" 
        validator={VALIDATION_REQUIRED}
        errorText={'Please fill in the field'}
      />
      <Input 
        element="input" 
        type="number" 
        label="cvc" 
        placeholder={'e.g 123'}
        validator={VALIDATION_REQUIRED}
        errorText={'Please enter in a valid cvc.'}
      />
      <Button type="submit">confirm</Button> 
    </div>    
  );
};

export default Forms;