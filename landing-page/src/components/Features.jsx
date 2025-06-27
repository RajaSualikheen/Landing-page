import React from "react";
import "../styless/Features.css"; // Adjust the path as necessary

const Features = () => {
  return (
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
          <img src="./src/assets/features.png" alt="Laptop and Mobile UI" />
        </div>
      </div>
    </section>
  );
};

export default Features;
