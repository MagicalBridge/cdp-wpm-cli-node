'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 配置mongo插件
  mongo: {
    enable: true,
    package: 'egg-mongo-native',
  },
};
