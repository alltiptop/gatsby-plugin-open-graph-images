exports.config = (() => {
  const defaultConfig = {
    defaultSize: {
      width: 1200,
      height: 630,
    },
    puppeteerLaunchOptions: {
      product: "chrome",
      headless: true,
      args: ['--no-sandbox'],
      slowMo: 0,
      channel: "stable",
      timeout: 0,
    },
    componentGenerationDir: "__generated",
  };

  let currentConfig = {};

  return {
    init: (config) => {
      currentConfig = {
        ...defaultConfig,
        ...config,
        defaultSize: { ...defaultConfig.defaultSize, ...(config.defaultSize || {}) },
      };
    },
    getConfig: () => {
      return currentConfig;
    },
  };
})();
