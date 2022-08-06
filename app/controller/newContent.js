'use strict';

const Controller = require('egg').Controller;

class NewContentController extends Controller {
  async index() {
    const { ctx } = this
    const query = ctx.query;
    console.log(query); // { name: 'louis' }
    ctx.body = `这是新闻内容页面参数是${query.name}`
  }
}

module.exports = NewContentController;
