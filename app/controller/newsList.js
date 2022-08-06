'use strict';

const Controller = require('egg').Controller;

class NewsListController extends Controller {
  async index() {
    const {ctx} = this
    const params = ctx.params
    console.log(params);
    
    ctx.body = `这是新闻列表页面${params.aid}`
  }
}

module.exports = NewsListController;
