import React from 'react';
import Input from './FormElements/input';
import Button from './FormElements/button';

import './stylesheets/forms.css';

const Forms = () => {
  return (
    <div className="form-control">
      <Input element="input" type="text" label="cardholder name" />
      <Input element="input" type="number" label="card number" />
      <Input element="input" type="number" label="exp.date (mm/yy)" />
      <Input element="input" type="number" label="cvc" />
      <Button type="submit">confirm</Button> 
    </div>    
  );
};

export default Forms;