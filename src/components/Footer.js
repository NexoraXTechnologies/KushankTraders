import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <strong>KT</strong> <span className="footer-logo-text">Khushank Traders</span>
            </div>
            <p className="footer-description">
              Reliable transport and building material supply, ensuring quality and trusted partnership for businesses and individuals across Nagpur.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-contact-group">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact-details">
              <li>Proprietor: Hemratan M. Yasamkar</li>
              <li>Email: hyesamkar@gmail.com</li>
              <li>Phone: +91 9284077578 / 9373439957</li>
              <li>Nagpur, Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
