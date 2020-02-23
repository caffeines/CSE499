const Customer = require('../models/customer');

/**
 * @async
 * @static
 * @param {string} username 
 * @param {Object} options 
 * @returns {Promise <object>} users data 
 */
const updateProfile = async (username, options) => {
  try {
    const user = await Customer.updateOne({ username }, { options }, { new: true });
    return user;
  } catch (err) {
    return Promise.reject(err);
  }
};
exports.updateProfile = updateProfile;

/**
 * @async
 * @static
 * @param {string} username 
 * @param {Object} options 
 * @returns {Promise <object>} order data 
 */
const addOrders = async (username, newOrder) => {
  try {
    const order = await Customer.updateOne(
      { username },
      { $push: { orders: { $each: [newOrder], $position: 0 } } },
      { new: true }
    );
    return order;
  } catch (err) {
    return Promise.reject(err);
  }
};
exports.addOrders = addOrders;