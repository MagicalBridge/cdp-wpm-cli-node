'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo() {
    return {
      "name": "louis"
    }
  }
}

module.exports = UserService;
