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
          eHealth is a revolutionary platform designed to streamline the process
          of booking appointments and scheduling online consultations in
          governmental hospitals. Our mission is to improve the healthcare
          experience by providing patients with easy access to vital medical
          services, ensuring a seamless and efficient journey from appointment
          booking to virtual consultations. We understand that navigating the
          healthcare system can be complex and time-consuming, which is why
          eHealth was created. By partnering with governmental hospitals, we
          simplify the process, enabling patients to book appointments online,
          check availability, and consult with healthcare professionals from the
          comfort of their homes.
        </p>
        <p className="about-text">Learn about our services!</p>

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
