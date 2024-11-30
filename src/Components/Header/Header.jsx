import React, { useState } from "react";
import Logo from "../Images/logo.png";
import "../Header/Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="CurePlus Medicals" />
      </div>
      <button className="navbar-toggle" onClick={handleToggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
      <button className="navbar-button">Book Appointment</button>
    </nav>
  );
};
