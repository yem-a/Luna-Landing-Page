import React, { useState } from 'react';
import '../styles/Hero.css';
import analyticsDashboard from '../images/analytics-dashboard.png';
import erpOverview from '../images/erp-overview.png';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send the form data to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xvgokalj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setShowThankYou(true);
        setEmail(''); // Clear the email input
        setTimeout(() => setShowThankYou(false), 3000); // Hide message after 3 seconds
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Empower Teams. Amplify Results.</h1>
          <p>For high-growth teams: AI-driven insights to drive efficiency, team engagement, and growth.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
            />
            <button type="submit">Get Early Access</button>
          </form>
          <small>Stay updated on our progress →</small>
        </div>
        <div className="hero-images">
          <img src={analyticsDashboard} alt="Analytics Dashboard" className="dashboard-image" />
          <img src={erpOverview} alt="ERP Overview" className="erp-image" />
        </div>
      </div>
      {showThankYou && (
        <div className="thank-you-message">
          Thank you for submitting. We'll let you know when we launch!
        </div>
      )}
    </section>
  );
};

export default Hero;