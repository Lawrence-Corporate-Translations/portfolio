import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="contact-page-container">
      {/* Add role="main" and aria-label for screen readers */}
      <main className="contact-main" role="main" aria-labelledby="contact-hero-heading">
        <Header />

        {/* Hero section with heading association */}
        <section className="contact-hero">
          <div className="contact-content">
            {/* id used for aria-labelledby */}
            <h1 id="contact-hero-heading" className="contact-title">
              {t("contact.heroTitleLine1")}
            </h1>

            <p className="contact-subtitle">
              {t("contact.heroSubtitle")}
            </p>

            {/* Options section with landmark role and aria-label */}
            <section
              className="contact-options"
              aria-label={t("contact.contactMethodsSectionLabel") || "Contact Methods"}
            >
              {/* Use article or section to improve semantics */}
              <article className="contact-card">
                <h2>{t("contact.cardTitle1")}</h2>
                <p>{t("contact.cardContent1")}</p>
              </article>

              <article className="contact-card">
                <h2>{t("contact.cardTitle2")}</h2>
                <p>{t("contact.cardContent2")}</p>
              </article>

              <article className="contact-card">
                <h2>{t("contact.cardTitle3")}</h2>
                <p>{t("contact.cardContent3")}</p>
              </article>

              <article className="contact-card">
                <h2>{t("contact.cardTitle4")}</h2>
                <p>{t("contact.cardContent4")}</p>
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
