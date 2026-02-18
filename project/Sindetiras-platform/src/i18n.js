import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationEL from './locales/el.json';

const resources = { 
    en: {translation: translationEN }, 
    el: {translation: translationEL }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'el',          //default 
    fallbackLng: 'en',
    interpolation: {escapeValue: false }
});

export default i18n;