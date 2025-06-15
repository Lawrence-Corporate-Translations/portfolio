import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../styles/AboutPage.css";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="about-page-container">
      <main className="about-main">
        <Header />

        <section className="about-hero">
          <div className="about-content">
            <h1 className="about-title">{t("about.heroTitleLine1")}</h1>
            <p className="about-subtitle">
              {t("about.heroSubtitle")}
            </p>

            <div className="about-cards">
              <div className="about-card">
                <h2>{t("about.cardTitle1")}</h2>
                <p>
                  {t("about.cardContent1")}
                </p>
              </div>

              <div className="about-card">
                <h2>{t("about.cardTitle2")}</h2>
                <p>
                  {t("about.cardContent2")}
                </p>
              </div>

              <div className="about-card">
                <h2>{t("about.cardTitle3")}</h2>
                <p>
                  {t("about.cardContent3")}
                </p>
              </div>

              <div className="about-card">
                <h2>{t("about.cardTitle4")}</h2>
                <p>
                  {t("about.cardContent4")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}