import React from 'react';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Navbar from './navbar';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contacts';
import Footer from './Footer';
import ScrollArrow from './ScrollArrow';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </>
  )
}

export default Home;
