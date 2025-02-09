import React from "react";
import { NavLink } from "react-router-dom";
import "./AppLink.css";
import logo from "/e.png"; // Adjust path as needed

const AppLink = () => {
  return (
    <div className="nav-container">
      {/* Logo */}
      <NavLink to={"/"} className="logo-link">
        <img src={logo} alt="eHealth Logo" className="logo" />
      </NavLink>

      {/* Navigation Links */}
      <nav className="nav-links">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Services
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default AppLink;
