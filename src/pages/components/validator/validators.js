import React from 'react';

//multiple validators.
/*

name
  START 'name' parameter
  EVALUATE if 'name' is an empty string.
    FAIL or PASS 

mm/yy
  START 'mm' and 'yy' parameters
  EVALUATE if 'mm' is within 1-12 and 'yy' is within the last 80 years,
  FAIL or PASS 

cvc
  START 'cvc' parameter
  EVALUATE 'cvc' is has a length of 3 and is numerical.
  FAIL or PASS 

card number:
  START 'numbers' parameter
  EVALUATE if the value of 'numbers' is equal to a length of 16 
    FAIL return false
    PASS return true


  */
export const VALIDATION_REQUIRED = val => ({type: 'REQUIRED', val: val});

