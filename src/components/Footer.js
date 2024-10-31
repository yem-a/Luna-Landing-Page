import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © 2024 Luna | 
          <a href="/privacy-policy"> Privacy Policy</a> | 
          <a href="/terms-of-service"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;