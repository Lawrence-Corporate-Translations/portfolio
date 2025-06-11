import React from "react";
import Header from "../components/header";
import "../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page-container">
      <main className="contact-main">
        <Header />

        <section className="contact-hero">
          <div className="contact-content">
            <h1 className="contact-title">We're Here to Help</h1>
            <p className="contact-subtitle">
              Reach out to our team through any of the following options. We look forward to connecting with you.
            </p>

            <div className="contact-options">
              <div className="contact-card">
                <h2>Email</h2>
                <p>Sales@lctltd.com</p>
              </div>

              <div className="contact-card">
                <h2>Phone</h2>
                <p>+972 (54) 596-8308</p>
              </div>

              <div className="contact-card">
                <h2>Live Chat</h2>
                <p>Chat with our support team 24/7</p>
                <button className="contact-button">Start Chat</button>
              </div>

              <div className="contact-card">
                <h2>Visit Us</h2>
                <p>123 Business St, Suite 100<br/>Jerusalem, 10001</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
