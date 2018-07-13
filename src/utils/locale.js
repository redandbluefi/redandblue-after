import enLocaleData from 'react-intl/locale-data/en';
import fiLocaleData from 'react-intl/locale-data/fi';
import {
  determineLocale as getLocale,
  determineClientLocale as getClientLocale
} from '@redandblue/utils/lib/locale';
import enMessages from '../i18n/en.json';
import fiMessages from '../i18n/fi.json';

// Modify this to add/remove locales from the application
const LOCALE_DATA = {
  en: {
    data: enLocaleData,
    messages: enMessages
  },
  fi: {
    data: fiLocaleData,
    messages: fiMessages
  }
};
const APP_LOCALES = Object.keys(LOCALE_DATA);

export function determineLocale(req, res) {
  return getLocale(APP_LOCALES)(req, res);
}

export function determineClientLocale(req, res) {
  return getClientLocale(APP_LOCALES)(req, res);
}

export function getLocaleData(localeCode) {
  return LOCALE_DATA[localeCode];
}
