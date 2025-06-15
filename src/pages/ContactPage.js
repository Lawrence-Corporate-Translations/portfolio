import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="contact-page-container">
      <main className="contact-main">
        <Header />

        <section className="contact-hero">
          <div className="contact-content">
            <h1 className="contact-title">{t("contact.heroTitleLine1")}</h1>
            <p className="contact-subtitle">
              {t("contact.heroSubtitle")}
            </p>

            <div className="contact-options">
              <div className="contact-card">
                <h2>{t("contact.cardTitle1")}</h2>
                <p>{t("contact.cardContent1")}</p>
              </div>

              <div className="contact-card">
                <h2>{t("contact.cardTitle2")}</h2>
                <p>{t("contact.cardContent2")}</p>
              </div>

              <div className="contact-card">
                <h2>{t("contact.cardTitle3")}</h2>
                <p>{t("contact.cardContent3")}</p>
              </div>

              <div className="contact-card">
                <h2>{t("contact.cardTitle4")}</h2>
                <p>{t("contact.cardContent4")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
