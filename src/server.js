import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { render } from '@jaredpalmer/after';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Document from './Document';
import { IntlProvider, addLocaleData } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import App from './pages/App';
import { determineLocale, getLocaleData } from './utils/locale';
import routes from './routes';
import theme from './theme';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.use(compression());
server.use(helmet());
server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

// NOTE Add / load static data here. This will be along inside the application
const initialData = { hello: 'world!' };

server.get('/*', async (req, res) => {
  try {
    const localeCode = determineLocale(req, res);
    if (!localeCode) {
      return;
    }
    const locale = getLocaleData(localeCode);
    addLocaleData(locale.data);

    const context = {};
    const isFrontpage = req.url === `/${localeCode}/`;
    // Pass all initial data here
    // Note, that we pass it to our App here (for server-side render)
    // And also to the Document, where client will pick it up
    const customRenderer = node => {
      const appNode = (
        <IntlProvider locale={localeCode} messages={locale.messages}>
          <ThemeProvider theme={theme}>
            <StaticRouter location={req.url} context={context}>
              <App
                siteData={initialData}
                localeCode={localeCode}
                isFrontpage={isFrontpage}
              >
                {node}
              </App>
            </StaticRouter>
          </ThemeProvider>
        </IntlProvider>
      );
      const html = renderToString(appNode);
      return { html, initialData };
    };
    const html = await render({
      req,
      res,
      document: Document,
      routes,
      assets,
      customRenderer,
      // Anything else you add here will be made available
      // within getInitialProps(ctx)
      // e.g a redux store...
      customThing: 'thing'
    });
    res.send(html);
  } catch (error) {
    console.error('Error occurred on server-rendering', error);
    res.status(500).json({
      message: 'Error occurred. See server log for details.',
      error
    });
  }
});

export default server;
