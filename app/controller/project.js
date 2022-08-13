'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mongo.find('project');
    ctx.body = result;
  }
}

module.exports = ProjectController;
