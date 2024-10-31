import React, { useState, useEffect, useRef } from 'react';
import '../styles/Features.css';
import initiativeTracking from '../images/initiative-tracking.png';
import employeePulse from '../images/employee-pulse.png';
import aiInsights from '../images/ai-insights.png';

const Feature = ({ title, description, image }) => {
  const [enlarged, setEnlarged] = useState(false);
  const imageRef = useRef(null);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setEnlarged(!enlarged);
  };

  const handleClickOutside = (e) => {
    if (imageRef.current && !imageRef.current.contains(e.target)) {
      setEnlarged(false);
    }
  };

  useEffect(() => {
    if (enlarged) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [enlarged]);

  return (
    <div className="feature">
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
        className={`feature-image ${enlarged ? 'enlarged' : ''}`}
        onClick={handleImageClick}
        ref={imageRef}
      >
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Features</h2>
        <div className="features-grid">
          <Feature
            title="Track initiatives with ease"
            description="Say goodbye to scattered spreadsheets. Our platform keeps all key initiatives in one place."
            image={initiativeTracking}
          />
          <Feature
            title="Pulse check your team"
            description="Get real-time insights into team morale and engagement. Address issues proactively."
            image={employeePulse}
          />
          <Feature
            title="AI-powered insights"
            description="Let AI crunch the numbers. Get actionable recommendations to optimize operations and drive growth."
            image={aiInsights}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
