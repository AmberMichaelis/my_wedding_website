/** @format */

import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Wedding Details</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/RH2st4y/empty-ceremony-by-lake.jpg'
              text='Ceremony & Reception'
              label='Details'
              path='/location'
            />
            <CardItem
              src='https://i.ibb.co/Fny1VHn/ring-with-couple-in-background.jpg'
              text='Pictures'
              label='Pictures'
              path='/pictures'
            />
            <CardItem
              src='https://i.ibb.co/G3ySc9j/wedding-guests-at-reception.jpg'
              text='RSVP'
              label='RSVP'
              path='/rsvp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
