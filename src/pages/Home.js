import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    { title: 'Building Material Supply', description: 'Quality construction materials for all your building needs.' },
    { title: 'Sand Supply', description: 'Premium quality sand for construction and plastering.' },
    { title: 'Aggregate Supply', description: 'Various grades of aggregates for concrete and construction.' },
    { title: 'Construction Material Transportation', description: 'Reliable transport for all construction materials.' },
    { title: 'Commercial Transportation', description: 'Efficient transportation services for commercial projects.' },
    { title: 'Residential Project Supply', description: 'Complete material solutions for residential construction.' },
    { title: 'On-Time Delivery Services', description: 'Punctual delivery to keep your projects on schedule.' },
    { title: 'Bulk Material Transportation', description: 'Large-scale material transport with our dedicated fleet.' }
  ];

  const features = [
    'Trusted Local Supplier in Nagpur',
    'Premium Quality Building Materials',
    'Transparent & Competitive Pricing',
    'Reliable Transportation Network',
    'Timely Service Delivery',
    'Experienced Professional Team',
    'Customer-First Approach'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-pill">
            Building Materials • Transportation • Supply
          </div>
          <h1 className="hero-title">Khushank Traders</h1>
          <p className="hero-subtitle">
            Reliable Products, Quality Service, Trusted Partnership.
          </p>
          <div className="hero-actions">
            <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section border-top">
        <div className="container center-container">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Khushank Traders is committed to providing high-quality construction materials and dependable transportation services to customers across Nagpur and surrounding regions. We focus on reliability, customer satisfaction, and long-term business relationships built on trust and integrity.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="services-section border-top">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive offerings to support your construction needs.</p>
          </div>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section border-top">
        <div className="container why-choose-container">
          <div className="why-choose-content">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-text">
              We combine experience, reliability, and customer-first thinking to deliver dependable outcomes for every client we serve.
            </p>
          </div>
          <div className="why-choose-list">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <span className="checkmark">✓</span> {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section border-top">
        <div className="container center-container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            To provide reliable products and services while maintaining the highest standards of customer satisfaction and business integrity in the construction and transport industry.
          </p>
          <div className="mission-action">
            <Link to="/contact-us" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section border-top">
        <div className="container">
          <h2 className="section-title">Quick Links</h2>
          <div className="quick-links-grid">
            <Link to="/privacy-policy" className="quick-link-card">
              <h3 className="quick-link-title">Privacy Policy</h3>
              <p className="quick-link-desc">How we protect your information.</p>
            </Link>
            <Link to="/terms-and-conditions" className="quick-link-card">
              <h3 className="quick-link-title">Terms & Conditions</h3>
              <p className="quick-link-desc">Our terms of service.</p>
            </Link>
            <Link to="/contact-us" className="quick-link-card">
              <h3 className="quick-link-title">Contact Us</h3>
              <p className="quick-link-desc">Reach out to our team.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
