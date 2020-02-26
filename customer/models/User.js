const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  address: {
    type: String,
  },
  orders: [{
    id: {
      type: [ObjectId],
    },
    description: {
      type: String,
    },
  }]
});
module.exports = getModel('User', UserSchema);
