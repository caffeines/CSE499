const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: [String],
    required: true,
  },
  ratings: {
    rate: {
      type: Number,
      default: -1,
    },
    counterOfRatings: {
      type: Number,
      default: 0,
    },
  },
  discountPrice: {
    amount: {
      type: Number,
      default: 0,
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
  },
  totalNumberOfSell: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [ObjectId],
    ref: 'Comment',
  },
  category: {
    type: String,
    required: true,
  },
});
module.exports = getModel('Product', ProductSchema);