const OTP = require('../models/OTP');

const findOTP = async (username) => {
  try {
    const otp = await OTP.findOne({ username });
    return otp;
  } catch (error) {
    Promise.reject(error);
  }
}
exports.findOTP = findOTP;