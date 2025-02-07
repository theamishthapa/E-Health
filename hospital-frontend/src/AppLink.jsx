import React from "react";
import { NavLink } from "react-router-dom";
import "./AppLink.css";

const AppLink = () => {
  return (
    <div className="nav-container">
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
    </div>
  );
};

export default AppLink;
