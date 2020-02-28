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
  totalUnit: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  description: { 
    type: String,
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
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  }
});
module.exports = getModel('Product', ProductSchema);