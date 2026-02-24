import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Accessibility from './pages/Accessibility';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  // This state tracks which page we are on
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // This function decides which page to show
  const renderContent = () => {
    switch (activePage) {
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      case 'accessibility': return <Accessibility />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 5%', background: '#fff', borderBottom: '1px solid #eee' }}>
        <button onClick={() => setActivePage('home')} style={{ background: 'none', border: 'none', fontWeight: 'bold', fontSize: '1.2rem', color: '#1a365d', cursor: 'pointer' }}>
          LCT Ltd
        </button>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button onClick={() => setActivePage('home')} style={navLinkStyle}>{t('nav.home')}</button>
          <button onClick={() => setActivePage('services')} style={navLinkStyle}>{t('nav.services')}</button>
          <button onClick={() => setActivePage('contact')} style={navLinkStyle}>{t('nav.contact')}</button>
          <button 
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en')}
            style={{ background: '#1a365d', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
          >
            {i18n.language === 'en' ? 'עברית' : 'English'}
          </button>
        </div>
      </nav>

      <main id="main-content">
        {renderContent()}
      </main>

      <footer style={{ padding: '40px', textAlign: 'center', background: '#f8fafc', marginTop: '50px' }}>
        <p><strong>{t('companyName')}</strong></p>
        <button onClick={() => setActivePage('accessibility')} style={{ background: 'none', border: 'none', color: '#1a365d', textDecoration: 'underline', cursor: 'pointer' }}>
          {t('accessibility.link')}
        </button>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Sales@lctltd.com | 055-5587934</p>
      </footer>
    </div>
  );
}

const navLinkStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  color: '#333'
};

export default App;
