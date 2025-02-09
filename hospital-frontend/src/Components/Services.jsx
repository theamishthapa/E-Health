import React from "react";
import { FaEye, FaHeartbeat, FaUserMd, FaBrain, FaXRay } from "react-icons/fa";
import "./ComponentStyles/Services.css";

const servicesData = [
  {
    icon: <FaEye />,
    title: "Comprehensive Eye Exams",
    description: "Regular check-ups for healthy vision.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    description: "Advanced heart care and diagnostics.",
  },
  {
    icon: <FaUserMd />,
    title: "General Checkup",
    description: "Full body health assessment and consultations.",
  },
  {
    icon: <FaBrain />,
    title: "Neurology",
    description: "Specialized care for brain and nervous system disorders.",
  },
  {
    icon: <FaXRay />,
    title: "Radiology",
    description: "State-of-the-art imaging and diagnostic services.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
