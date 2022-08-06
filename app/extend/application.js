
'use strict';

const ObjectID = require('mongodb').ObjectID

module.exports = {
  getObjectId(params) {
    return ObjectID(params);
  },
};
