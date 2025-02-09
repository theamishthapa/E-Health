import React from "react";
import "./ComponentStyles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <section id="about" className="about-section">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          EyeCare Hospital is dedicated to providing the highest quality eye
          care to our patients. Our team of experienced ophthalmologists and
          staff are committed to using the latest technology and techniques to
          ensure the best possible outcomes for our patients.
        </p>
      </section>
    </div>
  );
};

export default About;
