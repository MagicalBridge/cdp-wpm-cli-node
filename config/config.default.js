/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660220277491_2007';

  // add your middleware config here
  config.middleware = [];

  config.mongo = {
    client: {
      host: '47.103.72.18',
      port: '27898',
      name: 'cdp-wpm-cli',
      user: '',
      password: '',
      options: {
        useUnifiedTopology: true,
      },
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
