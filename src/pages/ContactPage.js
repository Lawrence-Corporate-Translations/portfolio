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
              {/* Box 1: WhatsApp */}
              <article className="contact-card">
                <h2>{t("contact.whatsapp")}</h2>
                <p>
                  <a href="https://wa.me/972555587934" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {t("contact.whatsappDetail")}
                  </a>
                </p>
              </article>

              {/* Box 2: Phone */}
              <article className="contact-card">
                <h2>{t("contact.phone")}</h2>
                <p>
                  <a href="tel:0555587934" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {t("contact.phoneDetail")}
                  </a>
                </p>
              </article>

              {/* Box 3: Email */}
              <article className="contact-card">
                <h2>{t("contact.email")}</h2>
                <p>
                  <a href="mailto:sales@lctltd.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {t("contact.emailDetail")}
                  </a>
                </p>
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
