import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import '../styles/HomePage.css';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <main className="homepage-main" id="main" role="main">
        {/* Semantic Header */}
        <Header />

        {/* Hero Section with aria-labelledby */}
        <section
          className="hero-section"
          aria-labelledby="hero-heading"
        >
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-title">
              {t("home.heroTitleLine1")} <br />
              {t("home.heroTitleLine2")}
            </h1>
            <p className="hero-subtitle">
              {t("home.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Slider Navigation */}
        <nav
          className="slider-nav"
          aria-label={t("home.sliderNavigation")}
        >
          <div className="slider-buttons">
            <button
              className="slider-button"
              aria-label={t("home.previous")}
            >
              <span aria-hidden="true" style={{ fontSize: "24px" }}>
                &lt;
              </span>
              <span className="visually-hidden">{t("home.previous")}</span>
            </button>

            {/* Dots with role="tablist" if they act as navigation */}
            <div
              className="slider-dots"
              role="tablist"
              aria-label={t("home.sliderDots")}
            >
              <button
                className="slider-dot active"
                role="tab"
                aria-selected="true"
                aria-label={t("home.dot1")}
              />
              <button
                className="slider-dot"
                role="tab"
                aria-selected="false"
                aria-label={t("home.dot2")}
              />
              <button
                className="slider-dot"
                role="tab"
                aria-selected="false"
                aria-label={t("home.dot3")}
              />
            </div>

            <button
              className="slider-button"
              aria-label={t("home.next")}
            >
              <span className="visually-hidden">{t("home.next")}</span>
              <span aria-hidden="true" style={{ fontSize: "24px" }}>
                &gt;
              </span>
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}
