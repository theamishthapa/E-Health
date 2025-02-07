import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaUserShield } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="login-container">
      <h2>Select Login Type</h2>
      <div className="login-cards">
        <div className="login-card" onClick={() => navigate("/login/user")}>
          <FaUser className="login-icon" />
          <h3>User Login</h3>
        </div>
        <div
          className="login-card admin"
          onClick={() => navigate("/login/admin")}
        >
          <FaUserShield className="login-icon" />
          <h3>Admin Login</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
