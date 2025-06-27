import React from 'react';
import './FullPage.css';
 // replace with your image path

const FullPage = () => {
  return (
    <div className="page">

      {/* === Navbar === */}
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

      {/* === Hero Section === */}
      <section className="hero">
        <div className="hero__content">
          <h1>
            Launch Your Website<br />Faster with Ready-Made Components
          </h1>
          <p>A modern UI kit with clean, responsive code you can plug into any project.</p>
          <a href="#get-kit" className="hero__btn">Get the Kit &gt;</a>
        </div>
        <div className="hero__image">
          <img src="./src/assets/test.png" alt="Code Screenshot" />
        </div>
      </section>

      {/* === Features === */}
{/* === Features Section === */}
<section className="features" id="features">
  <h2>Features</h2>
  <div className="features__container">
    <ul className="features__list">
      <li>✔ Copy-Paste./src Code</li>
      <li>✔ Tailwind & HTML</li>
      <li>✔ Responsive Design</li>
      <li>✔ Time-Saving</li>
    </ul>
    <div className="features__image">
      <img src="./src/assets/hero.png" alt="Laptop and Mobile UI" />
    </div>
  </div>
</section>

{/* === Testimonials Section === */}
<section className="testimonials">
  <div className="testimonial__left">
    <div className="testimonial">
      <img src="/assets/user1.jpg" alt="Alex R." className="avatar" />
      <div className="stars">★★★★★</div>
      <p>“The components are beautifully crafted and easy to use”</p>
      <strong>Alex R.</strong>
    </div>
    <div className="testimonial">
      <img src="/assets/user2.jpg" alt="Emily T." className="avatar" />
      <div className="stars">★★★★★</div>
      <p>“I built my landing page in no time with this kit”</p>
      <strong>Emily T.</strong>
    </div>
  </div>

  <div className="testimonial__right">
    <h3>Testimonials</h3>
    <ul>
      <li>✔ 6 UI Components</li>
      <li>✔ 1 Full Page</li>
      <li>✔ Tailwind/HTML Code</li>
      <li>✔ Bonus PDF</li>
    </ul>

    <div className="price-box" id="buy">
      <p className="price">$5</p>
      <p className="or">or Pay What You Want</p>
      <a href="#" className="price-btn">Get Instant Access</a>
    </div>
  </div>
</section>

{/* === What’s Inside Section === */}
<section className="inside">
  <h3>What’s Inside</h3>
  <ul>
    <li>✔ 6 UI Components</li>
    <li>✔ 1 Full Page</li>
    <li>✔ Css/React Code</li>
  </ul>
</section>


      {/* === Footer === */}
      <footer className="footer">
        <p>&copy; 203A Company. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>

    </div>
  );
};

export default FullPage;
