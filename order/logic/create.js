const Order = require('../models/Order');

const createOrder = async (orderObj) => {
  try {
    const newOrder = await new Order(orderObj).save();
    return newOrder;
  } catch (err) {
    Promise.reject(err);
  }
}
exports.createOrder = createOrder;