import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./UserProfile.css";

const UserProfile = () => {
  let [userData, setUserData] = useState({});
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  let getUserData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:5000/hospital-user/user-profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(result.data.result);
    } catch (error) {
      console.log("Failed to get user data", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    toast.success("Logged in");
  }, []);

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="profile-card">
        <div className="user-icon">👤</div>
        <h1>My Profile</h1>
        <div className="profile-details">
          <p>
            <strong>Full Name:</strong> {userData.fullName}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.phoneNumber}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p>
            <strong>Age:</strong> {userData.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
