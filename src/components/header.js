import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import logo from "../assets/images/logo.png";
import '../styles/header.css';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="LangBridge Logo" />
          <span className="logo-text">Lawrence Corporate Translations</span>
        </div>

        <nav className="nav-desktop">
          {[
            { label: "Home", path: "/" },
            { label: "Contact Us", path: "/contact" },
            { label: "Our Services", path: "/services" },
            { label: "About Us", path: "/about" },
          ].map((item, idx) => (
            <Link key={idx} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>


        <Button
          className="request-quote-btn"
          onClick={() => alert("Request a quote clicked")}
        >
          Request a Quote
        </Button>

        
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

      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        aria-hidden={!sidebarOpen}
      >
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

        {[
          { label: "Home", path: "/" },
          { label: "Contact Us", path: "/contact" },
          { label: "Our Services", path: "/services" },
          { label: "About Us", path: "/about" },
        ].map((item, idx) => (
          <Link key={idx} to={item.path} onClick={() => setSidebarOpen(false)}>
            {item.label}
          </Link>
        ))}
      </aside>
    </>
  );
}
