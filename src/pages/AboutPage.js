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
            {/* Heading used as label for <main> */}
            <h1 id="about-hero-heading" className="about-title">
              {t("about.heroTitleLine1")}
            </h1>

            <p className="about-subtitle">
              {t("about.heroSubtitle")}
            </p>

            {/* Section with accessible label for screen readers */}
            <section
              className="about-cards"
              aria-label={t("about.aboutSectionLabel") || "About Our Company"}
            >
              <article className="about-card">
                <h2>{t("about.cardTitle1")}</h2>
                <p>{t("about.cardContent1")}</p>
              </article>

              <article className="about-card">
                <h2>{t("about.cardTitle2")}</h2>
                <p>{t("about.cardContent2")}</p>
              </article>

              <article className="about-card">
                <h2>{t("about.cardTitle3")}</h2>
                <p>{t("about.cardContent3")}</p>
              </article>

              <article className="about-card">
                <h2>{t("about.cardTitle4")}</h2>
                <p>{t("about.cardContent4")}</p>
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
