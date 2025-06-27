import React from 'react';
import '../styless/Hero.css'; 
import heroImage from '../assets/hero-img.png';// Adjust the path as necessary
 // replace with your image path

const Hero = () => {
  return (
<section className="hero">
        <div className="hero__content">
          <h1>
            Launch Your Website<br />Faster with Ready-Made Components
          </h1>
          <p>A modern UI kit with clean, responsive code you can plug into any project.</p>
          <a href="#get-kit" className="hero__btn">Get the Kit &gt;</a>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="Code Screenshot" loading="lazy" />
        </div>
      </section>
  );
};

export default Hero;
