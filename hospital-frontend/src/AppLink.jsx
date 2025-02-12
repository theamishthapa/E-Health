import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AppLink.css";
import logo from "/e.png"; // Adjust path as needed
import { ToastContainer, toast } from "react-toastify";

const AppLink = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication state
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    toast.success("Logged out"); // Show toast before navigation
    setTimeout(() => {
      navigate("/"); // Redirect after a short delay
    }, 1000);
  };

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

        {/* Conditional Rendering for Authentication */}
        {isAuthenticated ? (
          <>
            <NavLink
              to={"/user-profile"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              My Profile
            </NavLink>
            <button className="nav-link logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default AppLink;
