import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="page-header center-container container">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle">Last updated: June 2025</p>
      </div>

      <div className="page-content container">
          <div className="content-card">
            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Khushank Traders. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="policy-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Request a quotation for our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us via phone, email, or WhatsApp</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Address</li>
                <li>Project details and requirements</li>
              </ul>

              <h3>2.2 Website Usage Information</h3>
              <p>We automatically collect certain information when you visit our website, including:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and fulfill your orders and service requests</li>
                <li>Send you quotations and business communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>4. Data Protection & Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Secure data storage systems</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="policy-section">
              <h2>5. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights and safety</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>6. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
              <p>We may use third-party services such as:</p>
              <ul>
                <li>Google Analytics for website analytics</li>
                <li>WhatsApp Business for customer communication</li>
                <li>Google Maps for location services</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>8. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="policy-section">
              <h2>9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section className="policy-section">
              <h2>10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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

export default PrivacyPolicy;
