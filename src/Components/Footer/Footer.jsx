import React from 'react';
import '../Footer/Footer.css';
import FooterLogo from '../Images/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

function Footer() {
  return (
    <>
    <div className="footer-container">
      {/* Header Section */}
      <header className="footer-header">
        <div className="footer-header-content">
          <h1>Take Charge of <br /> Your Health Today</h1>
          <p>
            Quality care is just a click away. <br /> Join our community of patients
          <br />  who prioritize accessible, reliable healthcare.
          </p>
          <div className="footer-head-action-buttons">
            <button className="footer-head-sign-up-btn">Sign Up Now</button>
            <button className="footer-head-download-btn">Download App</button>
          </div>
        </div>
      </header>

      {/* Footer Section */}
      <footer className="footer">
        {/* Logo and Social Media */}
        <div className="footer-column logo-section">
          <img src={FooterLogo} alt="CurePlus Medicals Logo" />
          <p>Connect with us on <br /> social media</p>
          <div className="social-media-icons">
          <FaFacebook style={{ color: "#1877F2", fontSize: "20px", cursor: "pointer" }} />
    <FaInstagram style={{ color: "#E4405F", fontSize: "20px", cursor: "pointer" }} />
    <FaTwitter style={{ color: "#1DA1F2", fontSize: "20px", cursor: "pointer" }} />
    <FaYoutube style={{ color: "#FF0000", fontSize: "20px", cursor: "pointer" }} />
          </div>
        </div>

        {/* Department List */}
        <div className="footer-column">
          <h3>DEPARTMENT</h3>
          <ul>
            <li>Cardiologist</li>
            <li>Dermatologist</li>
            <li>Psychiatrist</li>
            <li>Neurologist</li>
            <li>Pediatrician</li>
            <li>General Practitioner (GP)</li>
          </ul>
        </div>

        {/* About Us */}
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>Who we are</li>
            <li>Our Mission</li>
            <li>Team Members</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p>You can connect anytime <br /> with us to get any <br /> information:</p>
          <p className='footer-column-b'> <FaPhoneAlt  style={{ fontSize: "20px", cursor: "pointer" }}/> +2349048247863</p>
          <p className='footer-column-b'><MdMarkEmailRead  style={{ fontSize: "20px", cursor: "pointer" }}/> msavoeda@gmail.com</p>
        </div>
      </footer>
    </div>
  </>
  )
}

export default Footer