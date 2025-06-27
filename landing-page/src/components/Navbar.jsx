import React from 'react';
import '../styless/Navbar.css'; // Adjust the path as necessary

const Navbar = () => (
  <header className="navbar">
        <div className="navbar__logo">
          <span className="logo-box">C</span> Duyxit
        </div>
        <nav className="navbar__links">
          <a href="#features">Home</a>
          <a href="#components">Components</a>
          <a href="#about">About</a>
          <a href="#buy" className="nav-buy-link">Buy Now</a>
        </nav>
      </header>
);

export default Navbar;
