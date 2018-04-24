import enLocaleData from 'react-intl/locale-data/en';
import fiLocaleData from 'react-intl/locale-data/fi';
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
  // Check if URL already contains the locale, but just not the trailing slash
  if (
    req.originalUrl.match(/\/\w{2}$/) &&
    APP_LOCALES.includes(req.originalUrl.substring(1, 3))
  ) {
    res.redirect(307, `${req.originalUrl}/`);
    return false;
  }
  // Determine preferred locale and redirect, if it's not set in the URL already
  // Super simple guessing of locale and redirection
  if (!APP_LOCALES.some(code => req.originalUrl.startsWith(`/${code}`))) {
    let localeCode = req.acceptsLanguages(APP_LOCALES) || APP_LOCALES[0];
    const localePath = `/${localeCode}`;
    res.redirect(307, localePath + req.originalUrl);
    return false;
  }

  // After this, we use the locale defined in the URL, so user is able to determine their wanted locale
  return req.originalUrl.substring(1, 3);
}

export function determineClientLocale() {
  if (typeof window === 'undefined') {
    return APP_LOCALES[0];
  }

  const attemptedLocale = window.location.pathname.substring(1, 3);
  if (APP_LOCALES.includes(attemptedLocale)) {
    return attemptedLocale;
  }

  return APP_LOCALES[0];
}

export function getLocaleData(localeCode) {
  return LOCALE_DATA[localeCode];
}
