import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Accessibility from './pages/Accessibility'; 
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  // Legal Requirement: Ensures screen readers know the language and layout direction
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="nav-container">
          <Link to="/" className="logo">LCT Ltd</Link>
          <div className="nav-links">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/services">{t('nav.services')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
            <button 
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en')} 
              className="lang-toggle"
              aria-label="Toggle Language"
            >
              {i18n.language === 'en' ? 'עברית' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p><strong>{t('companyName')}</strong></p>
          <div className="footer-links">
            <Link to="/accessibility" style={{fontWeight: 'bold'}}>{t('accessibility.link')}</Link>
            <span className="divider">|</span>
            <a href="https://wa.me/972555587934" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <p style={{fontSize: '0.8rem', marginTop: '10px', opacity: 0.8}}>
            אישורים נוטריוניים ניתנים ע"י צד שלישי. האתר הונגש ע"פ תקן AA.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
