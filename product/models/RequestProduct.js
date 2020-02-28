const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const RequestedProductSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  picture: {
    type: [String],
  },
  category: {
    type: String,
    required: true,
  },
  info: {
    type: String,
  }
});
module.exports = getModel('Product', RequestedProductSchema);