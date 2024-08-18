import i18n from 'i18next';
import i18nLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18nBackend from 'i18next-http-backend';

i18n.use(i18nBackend)
    .use(i18nLanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
