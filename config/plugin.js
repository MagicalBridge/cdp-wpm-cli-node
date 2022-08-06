/*
 * @Author: your name
 * @Date: 2020-02-02 08:41:36
 * @LastEditTime: 2020-05-03 09:38:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dailyWork/node/egg-example/config/plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 配置 ejs 插件
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mongo: {
    enable: true,
    package: 'egg-mongo-native',
  },
};

