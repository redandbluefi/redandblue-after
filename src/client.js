import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { ensureReady, After } from '@jaredpalmer/after';
import { determineClientLocale, getLocaleData } from './utils/locale';
import routes from './routes';

ensureReady(routes).then(data => {
  const localeCode = determineClientLocale();
  const locale = getLocaleData(localeCode);
  addLocaleData(locale.data);

  return hydrate(
    <IntlProvider locale={localeCode} messages={locale.messages}>
      <BrowserRouter basename={`/${localeCode}/`}>
        <After data={data} routes={routes} />
      </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
