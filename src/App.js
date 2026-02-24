import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Accessibility from './pages/Accessibility'; 
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState('home');

  // Handle RTL/LTR language switching
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const renderPage = () => {
    switch(currentPage) {
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      case 'accessibility': return <Accessibility />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 5%', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ fontWeight: 'bold', color: '#1a365d', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
          LCT Ltd
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button onClick={() => setCurrentPage('home')} style={navButtonStyle}>{t('nav.home')}</button>
          <button onClick={() => setCurrentPage('services')} style={navButtonStyle}>{t('nav.services')}</button>
          <button onClick={() => setCurrentPage('contact')} style={navButtonStyle}>{t('nav.contact')}</button>
          <button 
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en')}
            style={{ background: '#1a365d', color: '#fff', border: 'none', padding: '5px 12px', borderRadius: '4px', cursor: 'pointer' }}
          >
            {i18n.language === 'en' ? 'עברית' : 'English'}
          </button>
        </div>
      </nav>

      <main id="main-content">
        {renderPage()}
      </main>

      <footer style={{ marginTop: '50px', padding: '40px', background: '#f8fafc', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <p><strong>{t('companyName')}</strong></p>
        <button 
          onClick={() => setCurrentPage('accessibility')} 
          style={{ color: '#1a365d', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
        >
          {t('accessibility.link')}
        </button>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Sales@lctltd.com | 055-5587934</p>
      </footer>
    </div>
  );
}

const navButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#333'
};

export default App;
