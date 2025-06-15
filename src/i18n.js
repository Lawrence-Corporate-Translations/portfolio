// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './assets/i18n/en.json';
import he from './assets/i18n/he.json';

const initI18n = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        he: { translation: he },
      },
      fallbackLng: 'en',
      debug: process.env.NODE_ENV === 'development',
      
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
      
      interpolation: {
        escapeValue: false,
      },
      
      // Critical: Make sure React components re-render on language change
      react: {
        bindI18n: 'languageChanged',
        bindI18nStore: '',
        transEmptyNodeValue: '',
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        useSuspense: false,
      },
      
      returnObjects: false,
      returnEmptyString: false,
      returnNull: false,
    });
};

initI18n();

export default i18n;
