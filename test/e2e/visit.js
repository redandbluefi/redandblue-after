// TODO Should configure Razzle a bit more to use ES6 with Nightmare (e.g. for import)
const nightmare = require('nightmare');
const url = require('url');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 45000;

// const HOST = {
//   development: 'http://localhost:3000',
//   test: 'https://url-to-staging-environment.appspot.com',
//   production: 'https://url-to-production-environment.appspot.com'
// }[process.env.NODE_ENV || 'development'];
const HOST = 'http://localhost:3000';

function visit(path = '', query = {}) {
  const location = url.resolve(HOST, path);
  return nightmare().goto(location);
}

module.exports = {
  visit
};
