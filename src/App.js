import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Accessibility from './pages/Accessibility';

function App() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState('home');

  return (
    <div className="App" dir={i18n.dir()}>
      <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#eee' }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('services')}>Services</button>
        <button onClick={() => setPage('accessibility')}>Accessibility</button>
        <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en')}>Language</button>
      </nav>
      {page === 'home' && <Home />}
      {page === 'services' && <Services />}
      {page === 'accessibility' && <Accessibility />}
    </div>
  );
}

export default App;
