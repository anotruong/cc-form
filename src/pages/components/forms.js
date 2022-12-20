import React from 'react';
import Input from './FormElements/input';
import Button from './FormElements/button';

import './stylesheets/forms.css';

const Forms = () => {
  return (
    <div className="form-control">
      <Input 
        element="input" 
        type="text" 
        label="cardholder name" 
        placeholder={'e.g. Jane Appleseed'} 
      />
      <Input 
        element="input" 
        type="number" 
        label="card number" 
        placeholder={'e.g. 1234-5678-9123-0000'}
      />
      <Input 
        element="input" 
        type="number" 
        label="exp.date (mm/yy)" 
      />
      <Input 
        element="input" 
        type="number" 
        label="cvc" 
        placeholder={'e.g 123'}
      />
      <Button type="submit">confirm</Button> 
    </div>    
  );
};

export default Forms;