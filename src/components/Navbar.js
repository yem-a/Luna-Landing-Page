import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Luna logo" />
          <h1>luna</h1>
        </div>
        <ul className="navbar-menu">
          <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
          <li><button onClick={() => scrollToSection('features')}>Features</button></li>
          <li><button onClick={() => scrollToSection('team')}>Team</button></li>
          <li><button onClick={() => scrollToSection('hero')} className="early-access">Early Access</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;