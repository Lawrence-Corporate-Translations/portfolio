import React from 'react';
import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'start' }}>
      <h1>{t('accessibility.title')}</h1>
      <p>{t('accessibility.content')}</p>
      <div style={{ marginTop: '30px' }}>
        <h3>התאמות הנגישות באתר:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>ניווט מלא באמצעות המקלדת.</li>
          <li>תאימות לקוראי מסך.</li>
          <li>הצהרת נגישות ברורה.</li>
          <li>שימוש ברכיב נגישות חיצוני (Nagishli).</li>
        </ul>
      </div>
      <p style={{ marginTop: '20px' }}><strong>{t('accessibility.coordinator')}</strong></p>
    </div>
  );
};

export default Accessibility;
