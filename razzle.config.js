const MAXIMUM_ASSET_SIZE = 400000;

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // Increase our maximum bundle size
    // Preferably in the long run we can setup tree shaking etc. and make this smaller
    config.performance = config.performance || {};
    config.performance.maxEntrypointSize = MAXIMUM_ASSET_SIZE;
    config.performance.maxAssetSize = MAXIMUM_ASSET_SIZE;

    return config;
  }
};
