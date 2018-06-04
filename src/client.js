import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { ensureReady, After } from '@jaredpalmer/after';
import { ThemeProvider } from 'styled-components';
import { determineClientLocale, getLocaleData } from './utils/locale';
import routes from './routes';
import theme from './theme';

ensureReady(routes).then(data => {
  const localeCode = determineClientLocale();
  const locale = getLocaleData(localeCode);
  addLocaleData(locale.data);

  return hydrate(
    <IntlProvider locale={localeCode} messages={locale.messages}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <After data={data} routes={routes} />
        </ThemeProvider>
      </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
