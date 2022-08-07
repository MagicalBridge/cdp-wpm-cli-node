"use strict"

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get("/project/template", controller.project.getTemplate)
  // router.get('/', controller.home.index);
  // router.get('/news', controller.news.index);
  // router.get('/newContent', controller.newContent.index);
  // router.get('/newsList/:aid', controller.newsList.index);
  // router.get('/mongo', controller.mongodbModel.index);
}
