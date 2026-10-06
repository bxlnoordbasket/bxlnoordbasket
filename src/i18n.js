import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import nl from './locales/nl.json';
import fr from './locales/fr.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      nl: {
        translation: nl,
      },
      fr: {
        translation: fr,
      },
      en: {
        translation: en,
      },
    },

    supportedLngs: ['nl', 'fr', 'en'],

    fallbackLng: 'nl',

    load: 'languageOnly',

    nonExplicitSupportedLngs: true,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      /*
        Eerste bezoek:
        1. Kijk of iemand vroeger zelf een taal koos.
        2. Anders browsertaal.

        Als geen van beide NL / FR / EN oplevert:
        fallbackLng = nl.
      */
      order: [
        'localStorage',
        'navigator',
      ],

      lookupLocalStorage:
        'bnb-language',

      caches: [
        'localStorage',
      ],
    },
  });

function updateHtmlLanguage(language) {
  const shortLanguage =
    language?.split('-')[0];

  const supportedLanguage =
    ['nl', 'fr', 'en'].includes(
      shortLanguage
    )
      ? shortLanguage
      : 'nl';

  document.documentElement.lang =
    supportedLanguage;
}

updateHtmlLanguage(i18n.language);

i18n.on(
  'languageChanged',
  updateHtmlLanguage
);

export default i18n;