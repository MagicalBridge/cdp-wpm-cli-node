'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mongo.find('project');
    console.log(result);
    ctx.body = '欢迎访问';
  }
}

module.exports = HomeController;
