const User = require('../models/User');

/**
 * @async
 * @static
 * @param {string} username 
 * @param {Object} options 
 * @returns {Promise <object>} users data 
 */
const updateProfile = async (username, options) => {
  try {        
    const user = await User.findOneAndUpdate({ username }, options , { new: true });
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
    const order = await User.findOneAndUpdate(
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