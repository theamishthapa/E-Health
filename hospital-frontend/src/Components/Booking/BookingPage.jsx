import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"; // import CSS for date picker
import "./BookingPage.css";

const BookingPage = () => {
  const { hospitalName } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked for ${name} at ${hospitalName} on ${selectedDate.toLocaleDateString()} at ${selectedTime}.`
    );
    navigate("/");
  };

  return (
    <div className="booking-container">
      <h1>Book an Appointment at {hospitalName}</h1>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            showPopperArrow={false}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>
        </div>

        <button type="submit" className="book-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
