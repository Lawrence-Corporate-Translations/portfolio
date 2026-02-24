import React from 'react';
import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{t('accessibility.title')}</h1>
      <p>{t('accessibility.content')}</p>
    </div>
  );
};

export default Accessibility;
