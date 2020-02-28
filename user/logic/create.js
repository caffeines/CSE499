const User = require('../models/User');

const createUser = async (obj) => {
  try {
    const newUser = await new User(obj).save();
    return newUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
exports.createUser = createUser;
