import React from 'react';
import ImgCarousel from './components/Carousel/Carousel';
import Destinations from './components/Destinations/Destinations';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Selects from './components/Selects/Selects';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <ImgCarousel/>
      <Footer/>
    </div>
  );
}

export default App;
