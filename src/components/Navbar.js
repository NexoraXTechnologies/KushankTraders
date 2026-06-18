import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <strong>KT</strong> <span className="logo-text-primary">Khushank Traders</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/contact-us" className={`navbar-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>
            Contact
          </Link>
          <Link to="/privacy-policy" className={`navbar-link ${location.pathname === '/privacy-policy' ? 'active' : ''}`}>
            Privacy
          </Link>
          <Link to="/terms-and-conditions" className={`navbar-link ${location.pathname === '/terms-and-conditions' ? 'active' : ''}`}>
            Terms
          </Link>
        </div>

        <Link to="/contact-us" className="navbar-cta btn btn-outline">
          Get in Touch
        </Link>

        <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
