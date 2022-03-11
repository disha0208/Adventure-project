import React from 'react';
import '../../App.css';
import Footer from '../../Footer/Footer';

import Cards from '../Cards/Cards';

import HeroSection from '../HeroSection';
import Newsletter from '../Newsletter';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Newsletter/>
      <Footer/>
      
     
    </>
  );
}

export default Home;