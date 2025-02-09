import React from "react";
import "./ComponentStyles/About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
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
        <p className="about-text">
          With years of experience and cutting-edge technology, we strive to
          restore and enhance vision, ensuring a brighter future for all. Our
          compassionate team is here to guide you on your journey to healthier
          eyes.
        </p>

        <button
          className="home-button"
          onClick={() => {
            navigate("/services");
          }}
        >
          Our Services
        </button>
      </section>
    </div>
  );
};

export default About;
