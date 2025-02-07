import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>EyeCare Hospital</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
