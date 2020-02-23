const Customer = require('../models/customer');

const createUser = async (obj) => {
  try {
    const newCustomer = await new Customer(obj).save();
    return newCustomer;
  } catch (error) {
    return Promise.reject(error);
  }
};
exports.createUser = createUser;
