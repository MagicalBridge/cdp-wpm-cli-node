// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendApplication = require('../../../app/extend/application');
type ExtendApplicationType = typeof ExtendApplication;
declare module 'egg' {
  interface Application extends ExtendApplicationType { }
}