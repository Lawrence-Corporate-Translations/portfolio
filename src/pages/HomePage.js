import React from "react";
import Header from "../components/header";
import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <main className="homepage-main">
        <Header />

        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Understanding Corporate Translation
              <br />
              Services for Businesses
            </h1>
            <p className="hero-subtitle">
              Empower your global reach with our expert translation solutions tailored for enterprises.
            </p>
          </div>
        </section>

        <div className="slider-nav">
          <div className="slider-buttons">
            <button className="slider-button">
              <span style={{ fontSize: '24px' }}>&lt;</span>
              <span>Previous</span>
            </button>

            <div className="slider-dots">
              <div className="slider-dot active"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>

            <button className="slider-button">
              <span>Next</span>
              <span style={{ fontSize: '24px' }}>&gt;</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
