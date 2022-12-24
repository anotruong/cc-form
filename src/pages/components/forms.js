import React from 'react';
import Input from './formElements/input';
import Button from './formElements/button';
// import { VALIDATION_REQUIRED } from './validator/validators';

import './stylesheets/forms.css';

const Forms = () => {
  return (
    <div className="form-control">
      <Input 
        element="input" 
        type="text" 
        label="cardholder name" 
        placeholder={'e.g. Jane Appleseed'} 
        validator={[]}
        errorText={"Can't be blank"}
      />
      <Input 
        element="input" 
        type="number" 
        label="card number" 
        placeholder={'e.g. 1234 5678 9123 0000'}
        validator={[]}
        errorText={"Wrong format, numbers only."}
      />
      <Input 
        element="input" 
        type="number" 
        label="MM" 
        placeholder={'MM'}
        validator={[]}
        errorText={"Can't be blank"}
      />
      <Input 
        element="input" 
        type="number" 
        label="yy" 
        placeholder={'YY'}
        validator={[]}
        errorText={"Can't be blank"}
      />
      <Input 
        element="input" 
        type="number" 
        label="cvc" 
        placeholder={'e.g 123'}
        validator={[]}
        errorText={"Can't be blank"}
      />
      <Button type="submit">confirm</Button> 
    </div>    
  );
};

export default Forms;