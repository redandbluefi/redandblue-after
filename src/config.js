import enConfig from './config.en';
import fiConfig from './config.fi';

const appConfig = {
  apiHost: process.env.RAZZLE_API_HOST || 'https://jsonplaceholder.typicode.com'
};

export default {
  app: appConfig,
  en: enConfig,
  fi: fiConfig
};
