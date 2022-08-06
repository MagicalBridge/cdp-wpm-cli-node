/*
 * @Author: your name
 * @Date: 2020-05-03 07:30:32
 * @LastEditTime: 2020-05-03 18:53:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dailyWork/node/egg-example/app/controller/mongodbModel.js
 */
'use strict';

const Controller = require('egg').Controller;
const ObjectID = require('mongodb').ObjectID;

class MongodbModelController extends Controller {
  async index() {
    // 1、查找
    // const mongores = await this.app.mongo.find('student', {
    //   query: {
    //     name: 'kerry',
    //   },
    // });

    // 2、增加数据

    // const mongores = await this.app.mongo.insertOne('student', { doc: {
    //   name: 'louis',
    //   age: '26',
    //   sex: '男',
    // } });

    // 3、找到一条数据并更新
    // const mongores = await this.app.mongo.findOneAndUpdate('student', {
    //   filter: {
    //     name: 'louis',
    //   },
    //   update: {
    //     $set: {
    //       name: 'chu',
    //       age: 27,
    //     },
    //   },
    // });

    // 4、删除数据 每次只删除一条数据
    // const mongores = await this.app.mongo.findOneAndDelete('student', {
    //   filter: {
    //     name: '赵四',
    //   },
    // });

    // 5、根据指定的id来查找数据
    // const mongores = await this.app.mongo.findOne('student', {
    //   query: {
    //     _id: ObjectID('5e34ca75cdcd3524ab166c55'),
    //   },
    // });

    // 使用扩展的方式实现
    const mongores = await this.app.mongo.findOne('student', {
      query: {
        _id: this.app.getObjectId('5e34ca75cdcd3524ab166c55'),
      },
    });

    console.log(mongores);
    this.ctx.body = '我是数据库学习文件';
  }
}

module.exports = MongodbModelController;

