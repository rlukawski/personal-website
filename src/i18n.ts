import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import plTranslations from './locales/pl.json';

// Get language from URL path or default to 'en'
const getLanguageFromPath = (): string => {
  const path = window.location.pathname;
  const match = path.match(/^\/(en|pl)(\/|$)/);
  return match ? match[1] : 'en';
};

const initialLanguage = getLanguageFromPath();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      pl: {
        translation: plTranslations,
      },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

