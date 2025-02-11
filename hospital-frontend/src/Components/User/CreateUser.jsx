import React, { useState } from "react";
import "./CreateUser.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const CreateUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      email: email,
      password: password,
      age: age,
      gender: gender,
      address: address,
      phoneNumber: phoneNumber,
    };
    data = { ...data, role: "User" };

    try {
      let result = await axios({
        url: `http://localhost:5000/hospital-user`,
        method: "POST",
        data: data,
      });

      setFullName("");
      setEmail("");
      setPassword("");
      setAge("");
      setGender("");
      setAddress("");
      phoneNumber("");
      console.log(result);
    } catch (error) {
      console.log("failed to create user", error);
    }
  };

  return (
    <div className="create-user-container">
      <h2>Create Your Account</h2>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-options">
            {genders.map((item, index) => (
              <label key={index} className="gender-label">
                <input
                  type="radio"
                  name="gender"
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => setGender(e.target.value)}
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <PhoneInput
            country="US"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>

        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
