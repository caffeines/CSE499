const mongoose = require('mongoose');
const ObjectId = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const OTPSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  OTP: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,

  },
  createdAt: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: String,
    required: true,
  },
  retries: {
    type: Number,
    min: 0,
    default: 3,
  }
});
module.exports = getModel('User', OTPSchema);
