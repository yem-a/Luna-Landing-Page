import React from "react";
import "./App.css";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
