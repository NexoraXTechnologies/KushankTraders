import React from 'react';
import './PrivacyPolicy.css'; // Utilizing the same CSS as PrivacyPolicy

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header center-container container">
        <h1 className="section-title">Terms & Conditions</h1>
        <p className="section-subtitle">Last updated: June 2025</p>
      </div>

      <div className="page-content container">
          <div className="content-card">
            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Khushank Traders. These Terms and Conditions govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these terms. Please read them carefully.
              </p>
              <p>
                Khushank Traders is a Transport and Building Material Supplier based in Nagpur, Maharashtra, India, operating under the proprietorship of Hemratan M. Yasamkar.
              </p>
            </section>

            <section className="policy-section">
              <h2>2. Website Usage</h2>
              <p>By using this website, you agree to:</p>
              <ul>
                <li>Use the website only for lawful purposes</li>
                <li>Provide accurate information when submitting inquiries</li>
                <li>Not attempt to interfere with the website's functionality</li>
                <li>Not reproduce or distribute website content without permission</li>
                <li>Not use automated systems to access the website</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without notice.
              </p>
            </section>

            <section className="policy-section">
              <h2>3. Services Information</h2>
              <p>
                Khushank Traders provides building material supply and transportation services. Our services include:
              </p>
              <ul>
                <li>Building Material Supply</li>
                <li>Sand and Aggregate Supply</li>
                <li>Construction Material Transportation</li>
                <li>Commercial and Residential Project Support</li>
                <li>Bulk Material Transportation</li>
              </ul>
              <p>
                Service availability may vary based on location, quantity requirements, and current inventory. All services are subject to our operational capabilities.
              </p>
            </section>

            <section className="policy-section">
              <h2>4. Quotations and Pricing</h2>
              <p>All quotations provided by Khushank Traders are:</p>
              <ul>
                <li>Valid for a limited period as specified in the quotation</li>
                <li>Subject to change based on market conditions</li>
                <li>Exclusive of taxes unless explicitly stated otherwise</li>
                <li>Based on the specifications and quantities provided by the customer</li>
              </ul>
              <p>
                Final pricing will be confirmed at the time of order placement. We reserve the right to revise prices due to changes in raw material costs, transportation costs, or other market factors.
              </p>
            </section>

            <section className="policy-section">
              <h2>5. Product Availability</h2>
              <p>
                While we strive to ensure the constant availability of products, all orders are subject to product availability. If a particular material is out of stock or unavailable, we will promptly inform you and may suggest suitable alternatives.
              </p>
            </section>
            
            <section className="policy-section">
              <h2>6. Delivery Terms</h2>
              <p>
                We aim to deliver materials within the agreed-upon timeframe. However, delivery schedules may be affected by circumstances beyond our control, such as traffic, weather conditions, or vehicle breakdowns. We will not be held liable for any indirect or consequential loss arising from delayed delivery.
              </p>
            </section>

            <section className="policy-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall Khushank Traders or its proprietor, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our services, materials, or website.
              </p>
            </section>

            <section className="policy-section">
              <h2>8. Contact Us</h2>
              <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us:</p>
              <div className="contact-info-box">
                <p><strong>Khushank Traders</strong></p>
                <p>Plot No. 11, Manewada Road, Balaji Nagar, Manewada</p>
                <p>Nagpur - 440027, Maharashtra, India</p>
                <p>Phone: <a href="tel:9284077578">9284077578</a> | <a href="tel:9373439957">9373439957</a></p>
                <p>Email: <a href="mailto:hyesamkar@gmail.com">hyesamkar@gmail.com</a></p>
              </div>
            </section>
          </div>
      </div>
    </div>
  );
};

export default TermsConditions;
