import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./button";
import logo from "../assets/images/logo.png";
import "../styles/header.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lang) => {
    try {
      await i18n.changeLanguage(lang);
      setSidebarOpen(false); // close the sidebar after switching
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.contact"), path: "/contact" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.about"), path: "/about" },
  ];

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="LangBridge Logo" />
          <span className="logo-text">{t("companyName")}</span>
        </div>

        <nav className="nav-desktop">
          {navItems.map((item, idx) => (
            <Link key={idx} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-buttons">
          <div className="language-toggle">
            <button
              onClick={() => changeLanguage("en")}
              className={i18n.language === "en" ? "active" : ""}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("he")}
              className={i18n.language === "he" ? "active" : ""}
            >
              HE
            </button>
          </div>

          <Button
            className="request-quote-btn"
            onClick={() => alert("Request a quote clicked")}
          >
            {t("requestQuote")}
          </Button>
        </div>

        <div
          className="menu-button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setSidebarOpen(true)}
        >
          <Menu size={24} color="#374151" />
        </div>
      </header>

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} aria-hidden={!sidebarOpen}>
        <div
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          onKeyDown={(e) => e.key === "Enter" && setSidebarOpen(false)}
        >
          <X size={24} />
        </div>

        {navItems.map((item, idx) => (
          <Link key={idx} to={item.path} onClick={() => setSidebarOpen(false)}>
            {item.label}
          </Link>
        ))}

        <div className="sidebar-language-toggle">
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("he")}
            className={i18n.language === "he" ? "active" : ""}
          >
            HE
          </button>
        </div>
      </aside>
    </>
  );
}
