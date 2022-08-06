'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 获取新闻数据
    var list = ['louis', 'kerry', 'tom', 'jerry']

    // 在news 这个服务中获取 user 数据返回出去
    const obj = await this.service.user.getUserInfo();
    const name = obj.name
    return { list, name }
  }
}

module.exports = NewsService;
