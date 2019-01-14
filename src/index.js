import app from './server';
import http from 'http';
import https from 'https';
import fs from 'fs';

const useHttps =
  fs.existsSync('tmp/server.key') && fs.existsSync('tmp/server.cert');
const server = useHttps
  ? https.createServer(
      {
        key: fs.readFileSync('tmp/server.key'),
        cert: fs.readFileSync('tmp/server.cert')
      },
      app
    )
  : http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error);
  }

  const { PORT } = process.env;
  console.log(`🚀 Server started on port ${PORT} ➡️  http://localhost:${PORT}`);
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
