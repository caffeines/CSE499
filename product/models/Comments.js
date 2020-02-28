const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const CommentSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  commentUser: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Number,
    required: true,
  },
  updatedAt: {
    type: Number,
    default: -1,
  }
});
module.exports = getModel('Comment', CommentSchema);