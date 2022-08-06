'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 在 ctl里面调用服务里面的方法 这里也需要 使用await 将结果暴露出来
    const { list, name } = await this.service.news.getNewsList();
    // 在homectl 中获取 api的信息
    const api = this.config.api
    await this.ctx.render('home', {
      list,
      api,
      name
    })
  }
}

module.exports = HomeController;
