import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';

export default function Accessibility() {
  const { t } = useTranslation();

  return (
    <div className="accessibility-page">
      <Header />
      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>{t('accessibility.title')}</h1>
        <p>{t('accessibility.content')}</p>
        <hr />
        <h3>{t('accessibility.coordinator')}</h3>
      </main>
    </div>
  );
}
