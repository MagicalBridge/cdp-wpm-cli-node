/*
 * @Author: your name
 * @Date: 2020-02-02 08:41:36
 * @LastEditTime: 2020-05-03 07:35:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-example/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/newContent', controller.newContent.index);
  router.get('/newsList/:aid', controller.newsList.index);
  router.get('/mongo', controller.mongodbModel.index);
};
