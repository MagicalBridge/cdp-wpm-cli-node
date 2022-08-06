/*
 * @Author: your name
 * @Date: 2020-02-02 09:20:15
 * @LastEditTime: 2020-05-03 07:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dailyWork/node/egg-example/app/controller/news.js
 */
'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    // 这个render方法是一个异步的过程 需要添加 await 关键字前缀
    // ctx.body = '这是新闻页面'

    const msg = 'ejs';
    const list = [ 'louis', 'kerry', 'jack' ];
    await ctx.render('news', {
      msg,
      list,
    });
  }
}

module.exports = NewsController;
