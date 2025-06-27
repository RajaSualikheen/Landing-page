import React from 'react';
import '../styless/Navbar.css';
import { useState } from 'react';
 // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="logo-box">C</span> Duyxit
      </div>
      
      {/* Hamburger Button */}
      <button 
        className={`hamburger ${isOpen ? 'hamburger--active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>
      
      {/* Navigation Links */}
      <nav className={`navbar__links ${isOpen ? 'navbar__links--active' : ''}`}>
        <a href="#features" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#components" onClick={() => setIsOpen(false)}>Components</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#buy" className="nav-buy-link" onClick={() => setIsOpen(false)}>Buy Now</a>
      </nav>
    </header>
  );
};

export default Navbar;
