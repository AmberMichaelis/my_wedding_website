/** @format */

import React, { useState } from 'react';
import RsvpFormSignup from './RsvpFormSignup';
import RsvpFormSuccess from './RsvpFormSuccess';
import './RsvpForm.css';

const RsvpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <a href='/' className='close-btn'>
          x
        </a>
        <div className='form-content-left'>
          <img
            src='https://i.ibb.co/G3ySc9j/wedding-guests-at-reception.jpg'
            alt='Wedding Guests'
            className='form-img'
          />
        </div>
        {!isSubmitted ? (
          <RsvpFormSignup submitForm={submitForm} />
        ) : (
          <RsvpFormSuccess />
        )}
      </div>
    </>
  );
};

export default RsvpForm;
