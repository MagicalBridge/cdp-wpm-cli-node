/*
 * @Author: your name
 * @Date: 2020-02-02 08:41:36
 * @LastEditTime: 2020-05-03 09:40:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-example/config/config.default.js
 */
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
  config.keys = appInfo.name + '_1580604065151_1482';

  // add your middleware config here
  config.middleware = [];

  // 配置模板引擎
  config.view = {
    mapping: {
      // 这里有一个坑,如果这里将.html 修改成 .ejs 会报错
      '.html': 'ejs',
    },
  };

  config.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'koaTest',
      user: '',
      password: '',
      options: {},
    },
  };

  // 全局定义api
  config.api = 'https://bestpay.com.cn';

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

