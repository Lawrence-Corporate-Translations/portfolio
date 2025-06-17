import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../styles/ServicesPage.css";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="services-page-container">
      <main
        className="services-main"
        role="main"
        aria-labelledby="services-hero-heading"
      >
        <Header />

        <section className="services-hero">
          <div className="services-content">
            <h1 id="services-hero-heading" className="services-title">
              {t("services.heroTitleLine1")}
            </h1>

            <p className="services-subtitle">
              {t("services.heroSubtitle")}
            </p>

            <section
              className="services-grid"
              aria-label={t("services.servicesOfferedLabel") || "Services Offered"}
            >
              <article className="service-card">
                <h2>{t("services.cardTitle1")}</h2>
                <p>{t("services.cardContent1")}</p>
              </article>

              <article className="service-card">
                <h2>{t("services.cardTitle2")}</h2>
                <p>{t("services.cardContent2")}</p>
              </article>

              <article className="service-card">
                <h2>{t("services.cardTitle3")}</h2>
                <p>{t("services.cardContent3")}</p>
              </article>

              <article className="service-card">
                <h2>{t("services.cardTitle4")}</h2>
                <p>{t("services.cardContent4")}</p>
              </article>

              <article className="service-card">
                <h2>{t("services.cardTitle5")}</h2>
                <p>{t("services.cardContent5")}</p>
              </article>

              <article className="service-card">
                <h2>{t("services.cardTitle6")}</h2>
                <p>{t("services.cardContent6")}</p>
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
