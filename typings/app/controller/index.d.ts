// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportMongodbModel = require('../../../app/controller/mongodbModel');
import ExportNewContent = require('../../../app/controller/newContent');
import ExportNews = require('../../../app/controller/news');
import ExportNewsList = require('../../../app/controller/newsList');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    mongodbModel: ExportMongodbModel;
    newContent: ExportNewContent;
    news: ExportNews;
    newsList: ExportNewsList;
  }
}
