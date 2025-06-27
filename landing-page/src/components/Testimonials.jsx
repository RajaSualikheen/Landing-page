import React from 'react';
import '../styless/Testimonials.css';

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
