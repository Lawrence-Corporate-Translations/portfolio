import React from "react";
import Header from "../components/header";
import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <main className="about-main">
        <Header />

        <section className="about-hero">
          <div className="about-content">
            <h1 className="about-title">About Our Company</h1>
            <p className="about-subtitle">
              We help global businesses thrive through expert communication and cultural fluency.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <h2>Our Mission</h2>
                <p>
                  To empower organizations worldwide with top-tier language and localization services that foster growth and connection.
                </p>
              </div>

              <div className="about-card">
                <h2>Our Values</h2>
                <p>
                  Integrity, cultural sensitivity, and precision guide everything we do to ensure your message resonates globally.
                </p>
              </div>

              <div className="about-card">
                <h2>Our Team</h2>
                <p>
                  A diverse group of linguists, strategists, and technologists dedicated to delivering excellence in every translation.
                </p>
              </div>

              <div className="about-card">
                <h2>Our Journey</h2>
                <p>
                  Founded in 2010, we've grown into a trusted partner for Fortune 500 companies across five continents.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}