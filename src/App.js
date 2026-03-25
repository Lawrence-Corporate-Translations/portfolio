import { React, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./i18n.js";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import Accessibility from './pages/Accessibility'; // שיניתי ל-Accessibility כדי להתאים לשם הקובץ שלך

function App() {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
    </Suspense>
  );
}

export default App;
