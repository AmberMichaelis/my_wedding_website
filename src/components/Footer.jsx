/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer__container no__print'>
      <section className='footer__alerts'>
        <p className='footer__alerts__heading'>Join the Adventure</p>
        <div className='input__areas'>
          <Button toPage='/rsvp' buttonStyle='btn__outline'>
            RSVP
          </Button>
        </div>
        <p className='footer__alerts__text'>
          This website was made with love using React.
        </p>
      </section>
      <div className='footer__links'>
        <div className='footer__link__wrapper'>
          <div className='footer__link__items'>
            <Link to='/'>Home</Link>
            <Link to='/location'>Details</Link>
            <Link to='/pictures'>Pictures</Link>
            <Link to='/'>Registry</Link>
            <Link to='/'>Livestream</Link>
          </div>
        </div>
      </div>
      <section className='social__media'>
        <div className='social__media__wrap'>
          <div className='footer__logo'>
            <Link to='/' className='social__logo'>
              MY WEDDING
              <i className='far fa-heart'></i>
            </Link>
          </div>
          <small className='website__rights'>MY WEDDING © 2022</small>
          <div className='social__icons'>
            <Link
              class='social__icon__link facebook'
              to='/'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social__icon__link instagram'
              to='/'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social__icon__link youtube'
              to='/'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social__icon__link twitter'
              to='/'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social__icon__link linkedin'
              to='/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
