import React from "react";
import { FaEye, FaHeartbeat, FaUserMd, FaBrain, FaXRay } from "react-icons/fa";
import "./ComponentStyles/Services.css";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    icon: <FaEye />,
    title: "Comprehensive Eye Exams",
    description: "Regular check-ups for healthy vision.",
    route: "/book-appointment/eye-exam",
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    description: "Advanced heart care and diagnostics.",
    route: "/book-appointment/cardiology",
  },
  {
    icon: <FaUserMd />,
    title: "General Checkup",
    description: "Full body health assessment and consultations.",
    route: "/book-appointment/general-checkup",
  },
  {
    icon: <FaBrain />,
    title: "Neurology",
    description: "Specialized care for brain and nervous system disorders.",
    route: "/book-appointment/neurology",
  },
  {
    icon: <FaXRay />,
    title: "Radiology",
    description: "State-of-the-art imaging and diagnostic services.",
    route: "/book-appointment/radiology",
  },
];

const Services = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleBookNow = (route) => {
    if (!token) {
      alert("Please log in to book an appointment.");
      navigate("/login");
    } else {
      navigate(route); // Navigate to specific service booking page
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div>
              <button onClick={() => handleBookNow(service.route)}>
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
