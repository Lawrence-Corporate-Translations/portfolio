import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="contact-page-container">
      <main className="contact-main" role="main" aria-labelledby="contact-hero-heading">
        <Header />

        <section className="contact-hero">
          <div className="contact-content">
            <h1 id="contact-hero-heading" className="contact-title">
              {t("contact.title")}
            </h1>

            <p className="contact-subtitle">
              {t("contact.subtitle")}
            </p>

            <section
              className="contact-options"
              aria-label={t("contact.contactMethodsSectionLabel") || "Contact Methods"}
            >
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/972555587934" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article>
                  <h2>{t("contact.whatsapp")}</h2>
                  <p>{t("contact.whatsappDetail")}</p>
                </article>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:0555587934" 
                className="contact-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article>
                  <h2>{t("contact.phone")}</h2>
                  <p>{t("contact.phoneDetail")}</p>
                </article>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:sales@lctltd.com" 
                className="contact-card" 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article>
                  <h2>{t("contact.email")}</h2>
                  <p>{t("contact.emailDetail")}</p>
                </article>
              </a>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
