const Customer = require('../models/customer');

const findUserByUsername = async (username) => {
  try {
    const customer = await Customer.findOne({ username });
    return customer;
  } catch (err) {
    return Promise.reject(err);
  }
};
exports.findUserByUsername = findUserByUsername;