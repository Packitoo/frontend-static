import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import fr from './locales/fr/translations';
import en from './locales/en/translations';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'fr',
        fallbackLng: 'fr',
        resources: {
            fr: {
                translation: fr,
            },
            en: {
                translation: en,
            },
        },
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        react: {
            wait: true,
        },
    });

export default i18n;
