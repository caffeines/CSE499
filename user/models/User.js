const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 'public',
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  address: {
    type: String,
  }
});
module.exports = getModel('User', UserSchema);
