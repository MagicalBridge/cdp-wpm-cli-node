'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      name: 'vue2标准模板',
      npmName: 'cdp-wpm-template-vue2',
      version: '0.1.0',
    };
  }
}

module.exports = ProjectController;
