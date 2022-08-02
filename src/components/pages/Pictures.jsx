/** @format */

import React from 'react';
import InfoSection from '../InfoSection';
import Main from '../Main';
import { InfoDataBoth, InfoDataMadison, InfoDataMark } from '../InfoData';
import { SliderData } from '../SliderData';
import Footer from '../Footer';

function Pictures() {
  return (
    <>
      <Main slides={SliderData} />
      <InfoSection {...InfoDataMadison} />
      <InfoSection {...InfoDataMark} />
      <InfoSection {...InfoDataBoth} />
      <Footer />
    </>
  );
}

export default Pictures;
