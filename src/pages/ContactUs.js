import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="page-header center-container container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Get in touch with Khushank Traders for your building materials and transport needs.</p>
      </div>

      <div className="page-content container">
        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-card-title">Address</h3>
            <p className="contact-card-text">
              Plot No. 11, Manewada Road,<br />
              Balaji Nagar, Manewada,<br />
              Nagpur - 440027
            </p>
          </div>
          
          <div className="contact-card">
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-text">
              <a href="tel:9284077578">+91 9284077578</a><br />
              <a href="tel:9373439957">+91 9373439957</a>
            </p>
          </div>

          <div className="contact-card">
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-text">
              <a href="mailto:hyesamkar@gmail.com">hyesamkar@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
