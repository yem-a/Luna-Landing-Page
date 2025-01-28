import React from "react";
import { Brain, Sparkles, Rocket, Send } from "lucide-react";
import "../styles/styles.css";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <Icon className="feature-icon" />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Hero = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Instant project clarity",
    },
    {
      icon: Sparkles,
      title: "Ideas to Tasks",
      description: "Structured in seconds",
    },
    {
      icon: Rocket,
      title: "Ship Faster",
      description: "Focus on building",
    },
  ];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Ship your projects faster - idea to execution
          <br />
          in minutes
        </h1>
        <p className="hero-subtitle">
          For developers and product teams who want to focus on building
        </p>

        {/* Swapped: Chat box now comes before the features list */}
        <div className="luna-chat expanded-chat">
          <div className="luna-header">
            <div className="luna-status"></div>
            <span>Luna AI</span>
          </div>

          <div className="luna-message">
            <div className="luna-icon">
              <Sparkles />
            </div>
            <h3>What are you building today?</h3>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Share your project idea..."
              className="project-input"
            />
            <button className="send-button">
              <Send />
            </button>
          </div>
        </div>

        {/* Features list moved below the chat box */}
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
