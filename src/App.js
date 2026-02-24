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
    // Ensures the site flips correctly for Hebrew (RTL)
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 5%', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#1a365d' }}>LCT Ltd</Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>{t('nav.home')}</Link>
          <Link to="/services" style={{ textDecoration: 'none', color: '#333' }}>{t('nav.services')}</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>{t('nav.contact')}</Link>
          <button 
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en')}
            style={{ background: '#1a365d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
          >
            {i18n.language === 'en' ? 'עברית' : 'English'}
          </button>
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

      <footer style={{ padding: '40px', textAlign: 'center', background: '#f8fafc', marginTop: '50px' }}>
        <p><strong>{t('companyName')}</strong></p>
        <Link to="/accessibility" style={{ color: '#1a365d' }}>{t('accessibility.link')}</Link>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Sales@lctltd.com | 055-5587934</p>
      </footer>
    </div>
  );
}

export default App;
