const OTP = require('../models/OTP');

const deleteUser = async(username) => {
  try {
    const user = OTP.deleteOne({username});
    return user;
  } catch (ex) {
    Promise.reject(err);
  }
}
exports.deleteUser = deleteUser;