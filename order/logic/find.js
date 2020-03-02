const Order = require('../models/Order');

const findOrderById = async (_id) => {
  try {
    const order = await Order.findById({ _id });
    return order;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findOrderById = findOrderById;


const findOrderByUsername = async (username) => {
  try {
    const orders = await Order.find({ username });
    return orders;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findOrderByUsername = findOrderByUsername;

const findOrderByDeliveryMan = async (deliveryMan) => {
  try {
    const orders = await Order.find({ deliveryMan });
    return orders;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findOrderByDeliveryMan = findOrderByDeliveryMan;

const findOrderByStatus = async (status) => {
  try {
    const orders = Order.find({ status });
    return orders;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findOrderByStatus = findOrderByStatus;

const findOrders = async () => {
  try {
    const orders = Order.find({});
    return orders;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findOrders = findOrders;

const findTotalOrder = () => {
  try {
    const totalOrder = await Order.countDocuments();
    const totalPreOrder = await Order.countDocuments({ orderType: 'preOrder' });
    const totalDeliveredOrder = await Order.countDocuments({ status: 'delivered' });
    const totalInQueueOrder = await Order.countDocuments({ status: 'inQueue' });
    const totalAcceptedOrder = await Order.countDocuments({ status: 'accepted' });
    // last 7 days order
    // todays order
    // last 1 months order
    return { totalOrder, totalPreOrder, totalDeliveredOrder, totalInQueueOrder, totalAcceptedOrder };
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findTotalOrder = findTotalOrder;