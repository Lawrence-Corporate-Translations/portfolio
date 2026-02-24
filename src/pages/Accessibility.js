import React from 'react';
import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const { t } = useTranslation();

  return (
    <div className="container" style={{ padding: '40px', textAlign: 'start' }}>
      <h1>{t('accessibility.title')}</h1>
      <p>{t('accessibility.content')}</p>
      <div style={{ marginTop: '20px' }}>
        <h3>התאמות הנגישות באתר:</h3>
        <ul>
          <li>ניווט מקלדת מלא</li>
          <li>תמיכה בטכנולוגיות מסייעות (קורא מסך)</li>
          <li>התאמה לדפדפנים מודרניים</li>
          <li>תיוג תמונות (Alt Text)</li>
        </ul>
      </div>
      <p><strong>{t('accessibility.coordinator')}</strong></p>
    </div>
  );
};

export default Accessibility;
