import React from 'react';
import Input from './FormElements/input';
import Button from './FormElements/button';

import './forms.css';

const Forms = () => {
  return (
    <form>
      <Input element="input" type="text" label="cardholder name" />
      <Input element="input" type="number" label="card number" />
      <Input element="input" type="number" label="month" />
      <Input element="input" type="number" label="year" />
      <Input element="input" type="text" label="cvc" />
      <Button type="submit">submit</Button>
    </form>    
  );
};

export default Forms;