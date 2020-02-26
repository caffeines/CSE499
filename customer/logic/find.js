const User = require('../models/User');

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (err) {
    return Promise.reject(err);
  }
};
exports.findUserByUsername = findUserByUsername;