import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import { ensureReady, After } from '@jaredpalmer/after';
import routes from './routes';
import enMessages from './i18n/en.json';

addLocaleData(enLocaleData);

ensureReady(routes).then(data =>
  hydrate(
    <IntlProvider locale="en" messages={enMessages}>
      <BrowserRouter>
        <After data={data} routes={routes} />
      </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
