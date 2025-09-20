import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Lawn Care & Maintenance',
    'Landscaping Design',
    'Landscape Construction'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ATELIER BOTANICA</h3>
            <p>Professional landscape design, construction and maintenance services.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Phone: 9000235052</p>
            <p>Email: atelierbotanica.info@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} ATELIER BOTANICA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;