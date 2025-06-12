import React from "react";
import Header from "../components/header";
import "../styles/ServicesPage.css";

export default function ServicesPage() {
  return (
    <div className="services-page-container">
      <main className="services-main">
        <Header />

        <section className="services-hero">
          <div className="services-content">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">
              Comprehensive language solutions tailored for modern enterprises.
            </p>

            <div className="services-grid">
              <div className="service-card">
                <h2>Document Translation</h2>
                <p>Accurate and culturally sensitive translation for legal, medical, and technical documents.</p>
              </div>

              <div className="service-card">
                <h2>Localization</h2>
                <p>Adapt your software, apps, and websites to new markets with native fluency and UX precision.</p>
              </div>

              <div className="service-card">
                <h2>Interpretation</h2>
                <p>Real-time multilingual support for conferences, business meetings, and global events.</p>
              </div>

              <div className="service-card">
                <h2>Transcreation</h2>
                <p>Creative rewriting that maintains your message and impact across cultures.</p>
              </div>

              <div className="service-card">
                <h2>Multilingual SEO</h2>
                <p>Boost your visibility with keyword research and content optimization in multiple languages.</p>
              </div>

              <div className="service-card">
                <h2>Voiceover & Subtitling</h2>
                <p>Bring your media to life with native voice talent and accurate subtitles.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
