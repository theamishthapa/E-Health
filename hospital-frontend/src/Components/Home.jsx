import React from "react";
import "./ComponentStyles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <section id="home" className="home-section">
        <h1 className="home-title">Welcome to eHealth</h1>
        <p className="home-text">
          Your health, our priority. Experience seamless online consultations
          and easy hospital bookings from the comfort of your home.
        </p>
        <p className="home-subtext">
          Connect with expert doctors, get personalized care, and book your
          appointments instantly.
        </p>
        <button
          className="home-button"
          onClick={() => {
            navigate("/about");
          }}
        >
          Learn About Us
        </button>
      </section>
    </div>
  );
};

export default Home;
