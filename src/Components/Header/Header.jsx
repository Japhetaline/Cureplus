import React from "react";
import Logo from "../Images/logo.png";
import '../Header/Header.css'


export const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="CurePlus Medicals" />
      </div>
      <ul className="navbar-links">
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
