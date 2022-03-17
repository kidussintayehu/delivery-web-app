import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>       
    <Navbar
      value = {
       ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
      }
      />

      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;