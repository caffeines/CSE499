const OTP = require('../models/OTP');
const { getOTPObject } = require('../middleware/OTPObject');
const insertOTP = async (username) => {
  try {
    const OTPObject = await getOTPObject(username);
    if (OTPObject) {
      const newOTP = await new OTP(OTPObject).save();
      return newOTP;
    }
    return Promise.reject(new Error('Failed to create add OTP'));
  } catch (err) {
    return Promise.reject(err);
  }
};
exports.insertOTP = insertOTP;