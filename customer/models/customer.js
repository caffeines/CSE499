const mongoose = require('mongoose');
const ObjectId = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  orders: {
    type: [ObjectId],
  }
});
module.exports = getModel('User', CustomerSchema);
