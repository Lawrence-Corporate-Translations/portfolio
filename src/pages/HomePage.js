import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import '../styles/HomePage.css';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <main className="homepage-main">
        <Header />

        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              {t("home.heroTitleLine1")} <br />
              {t("home.heroTitleLine2")}
            </h1>
            <p className="hero-subtitle">
              {t("home.heroSubtitle")}
            </p>
          </div>
        </section>

        <div className="slider-nav">
          <div className="slider-buttons">
            <button className="slider-button">
              <span style={{ fontSize: '24px' }}>&lt;</span>
              <span>{t("home.previous")}</span>
            </button>

            <div className="slider-dots">
              <div className="slider-dot active"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>

            <button className="slider-button">
              <span>{t("home.next")}</span>
              <span style={{ fontSize: '24px' }}>&gt;</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
