import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesStyles/EyeExam.css";

const hospitals = [
  {
    name: "Tilganga Institute of Ophthalmology",
    location: "Gaushala, Kathmandu",
    contact: "+977-1-4493775",
  },
  {
    name: "B.P. Koirala Lions Centre for Ophthalmic Studies",
    location: "Maharajgunj, Kathmandu",
    contact: "+977-1-4413182",
  },
  {
    name: "Himalaya Eye Hospital",
    location: "Pokhara, Nepal",
    contact: "+977-61-521111",
  },
  {
    name: "Sagarmatha Choudhary Eye Hospital",
    location: "Lahan, Nepal",
    contact: "+977-33-560497",
  },
  {
    name: "Mechi Eye Hospital",
    location: "Birtamod, Jhapa",
    contact: "+977-23-542111",
  },
];

const EyeExam = () => {
  const navigate = useNavigate();

  const handleBookAppointment = (hospitalName) => {
    // Navigate to the booking page with the hospital name as a parameter
    navigate(`/book-appointment/eye-exam/${hospitalName}`);
  };

  return (
    <div className="eye-exam-container">
      <h2 className="eye-exam-title">Comprehensive Eye Exams</h2>
      <p className="eye-exam-description">
        Regular eye check-ups are essential for maintaining good vision and
        overall eye health. With our platform, booking an appointment for an eye
        examination is quick and easy. Simply choose a hospital, book online,
        and consult with experienced ophthalmologists.
      </p>

      <h3 className="hospitals-title">Hospitals Providing Eye Examinations</h3>
      <div className="hospitals-list">
        {hospitals.map((hospital, index) => (
          <div key={index} className="hospital-card">
            <h4 className="hospital-name">{hospital.name}</h4>
            <p className="hospital-location">{hospital.location}</p>
            <p className="hospital-contact">Contact: {hospital.contact}</p>
            <button
              className="book-now-btn"
              onClick={() => handleBookAppointment(hospital.name)}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EyeExam;
