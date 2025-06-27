import React from 'react';
import '../styless/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-logo">🔴 Duyxit</span>
        <p>&copy; {new Date().getFullYear()} Duyxit. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:support@duyxit.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
