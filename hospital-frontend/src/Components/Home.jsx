import React from "react";
import "../Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="home-section">
        <h1 className="home-title">Welcome to EyeCare Hospital</h1>
        <p className="home-text">
          Your vision is our priority. We are committed to providing exceptional
          eye care services using state-of-the-art technology and a
          patient-centered approach.
        </p>
      </section>
    </div>
  );
};

export default Home;
