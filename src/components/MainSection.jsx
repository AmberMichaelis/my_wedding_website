/** @format */

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main__container'>
      <h1>Adventure Awaits</h1>
      <p>March 22, 2023</p>
      <div className='main__btns'>
        <Button
          className='btns'
          buttonStyle='btn__outline'
          buttonSize='btn__large'
          toPage='/location'
        >
          Details
        </Button>
        <Button
          className='btns'
          buttonStyle='btn__primary'
          buttonSize='btn__large'
          toPage='/rsvp'
        >
          RSVP
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
