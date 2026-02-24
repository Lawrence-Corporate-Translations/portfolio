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

  useEffect(() => {
    document.documentElement.dir = i18n.dir(i18n.language);
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 5%' }}>
        <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#1a365d' }}>LCT Ltd</Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
          <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en')}>
            {i18n.language === 'en' ? 'עברית' : 'English'}
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>

      <footer style={{ marginTop: '50px', padding: '20px', background: '#f8fafc', textAlign: 'center' }}>
        <p><strong>{t('companyName')}</strong></p>
        <Link to="/accessibility">{t('accessibility.link')}</Link>
        <p style={{ fontSize: '0.8rem' }}>WhatsApp: 055-5587934</p>
      </footer>
    </div>
  );
}

export default App;
