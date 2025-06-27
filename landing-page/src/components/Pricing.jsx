import React from 'react';
import '../styless/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-box">
        <h2>Get the Kit Now</h2>
        <p className="pricing-subtext">
          Unlock all components, the full landing page, and bonus resources.
        </p>
        <div className="price">
          <span className="currency">$</span>
          <span className="amount">5</span>
          <span className="note">or Pay What You Want</span>
        </div>
        <a href="https://your-gumroad-link.com" target="_blank" rel="noreferrer" className="buy-button">
          🔥 Instant Download
        </a>
      </div>
    </section>
  );
};

export default Pricing;
