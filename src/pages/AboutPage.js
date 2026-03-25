import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../styles/AboutPage.css";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page-container">
      <main
        className="about-main"
        role="main"
        aria-labelledby="about-hero-heading"
      >
        <Header />

        <section className="about-hero">
          <div className="about-content">
            <h1 id="about-hero-heading" className="about-title">
              {t("about.title")}
            </h1>

            <p className="about-subtitle">
              {t("about.subtitle")}
            </p>

            <section className="about-text-section">
              <article className="about-description">
                <p>{t("about.content")}</p>
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
