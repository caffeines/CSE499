const OTP = require('../models/OTP');
const { getOTPObject } = require('../middleware/OTPObject');
const insertOTP = async (username) => {
  try {
    const OTPObject = getOTPObject(username);
    if (OTPObject) {
      const newOtp = await OTP.insert({username, createdAt, expiresAt, OTP });
      return newOtp;
    }
    return Promise.reject(new Error('Failed to create add OTP'));
  } catch (err) {
    return Promise.reject(err);
  }
};
exports.insertOTP = insertOTP;