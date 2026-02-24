import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/i18n/en.json";
import he from "./assets/i18n/he.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    he: { translation: he }
  },
  lng: "he", // Default to Hebrew
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
