import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

const UserLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">User Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <button
          type="button"
          className="register-button"
          onClick={() => navigate("/login/user/create-user")}
        >
          Don't have an account? Register Now.
        </button>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
