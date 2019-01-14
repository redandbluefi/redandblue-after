import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { ensureReady, After } from '@jaredpalmer/after';
import { ThemeProvider } from 'styled-components';
import App from './pages/App';
import { determineClientLocale, getLocaleData } from './utils/locale';
import registerServiceWorker from './utils/service-worker';
import routes from './routes';
import theme from './theme';

const localeCode = determineClientLocale();
const locale = getLocaleData(localeCode);
addLocaleData(locale.data);

// Register the service worker for cache and offline functionality
if (process.env.NODE_ENV !== 'development') {
  registerServiceWorker({ localeCode });
}

const siteData = window.__data || {};

// Monkey-patch window.scrollTo, see https://github.com/jaredpalmer/after.js/blob/57301bbb6a7103fc5438972b484fd9c747a8d7be/src/After.tsx#L38
// We should fork and make a PR so that After.js scrollTo could be controlled e.g. via props
window.scrollTo = () => {};

ensureReady(routes).then(data => {
  return hydrate(
    <IntlProvider locale={localeCode} messages={locale.messages}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App siteData={siteData} localeCode={localeCode}>
            <After data={data} routes={routes} />
          </App>
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
