// Header.js
import React from "react";
import "../styles/styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-buttons">
        <button className="sign-in-button">Sign In</button>
        <button className="get-started-button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
