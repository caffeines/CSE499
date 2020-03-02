const mongoose = require('mongoose');
const ObjectId = require('mongoose').SchemaTypes;
const { getModel } = require('../lib/utils');
const OrederSchema = new mongoose.Schema({
  customerUsername: {
    type: String,
    required: true,
  },
  products: {
    type: [ObjectId],
    required: true,
  },
  orderDetails: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    extra: {
      type: String,
      required: true,
    }
  },
  location: {
    longitude: {
      type: String,
    },
    lattitude: {
      type: String,
    }
  },
  address: {
    type: String,
    required: true,
  },
  secondaryContact: {
    type: String,
  },
  coupon: {
    type: String,
  },
  status: {
    type: String,
    default: "inQueue", // accepted -> delivered
  },
  deliveryMan: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    maxlength: 250,
  },
  payment: {
    paidAmmount: {
      type: Number,
    },
    unpaidAmount: {
      type: Number,
    }
  },
  orderType: {
    type: String,
    default: 'preOrder',
  },
  ratting: {
    type: Number,
    default: -1,
  }
});
module.exports = getModel('Oreder', OrederSchema);
