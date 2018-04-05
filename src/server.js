import express from 'express';
import compression from 'compression';
import { render } from '@jaredpalmer/after';
import Document from './Document';
import routes from './routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.use(compression());
server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

server.get('/*', async (req, res) => {
  try {
    const html = await render({
      req,
      res,
      document: Document,
      routes,
      assets,
      // Anything else you add here will be made available
      // within getInitialProps(ctx)
      // e.g a redux store...
      customThing: 'thing'
    });
    res.send(html);
  } catch (error) {
    res.json(error);
  }
});

export default server;
