import React from 'react';
import About from './about/About';
import Banner from './banner/Banner';
import Contact from './contact/Contact';
import Portofolio from './portofolio/Portofolio';
import Services from './services/Services';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Portofolio></Portofolio>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default Home;
