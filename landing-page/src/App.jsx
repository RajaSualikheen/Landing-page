import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FullPage from './Fullpage';
import Inside from './components/inside'; // Importing the Inside component

import './App.css'; // Optional: global styles (fonts, resets, etc.)

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Inside />
      
      <Footer /> 
      
      {/* <FullPage /> */}
       
      {/* FullPage can be used as a separate component or integrated into the main flow */}
    </div>
  );
}

export default App;
