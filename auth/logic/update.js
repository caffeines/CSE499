const OTP = require('../models/OTP');
const { getOTPObject } = require('../middleware/OTPObject');

const insertOTP = async (username) => {
  try {
    const { OTP: token, expiresAt, createdAt } = await getOTPObject(username);    
    const updatedOTP = await OTP.findOneAndUpdate(
      { username },
      {
        $set: { OTP: token, expiresAt, createdAt, retries: 3 }
      },
      { upsert: true, new: true },
    );
    return updatedOTP;
  } catch (error) {
    return Promise.reject(error);
  }
}
exports.insertOTP = insertOTP;

const decrementRetries = async (username) => {
  try {
    const verfiedOtp = await OTP.findOneAndUpdate(
      { username },
      { $inc: { retries: -1 } },
    );
    return verfiedOtp;
  } catch (error) {
    console.error(error);
    Promise.reject(error);
  }
};
exports.decrementRetries = decrementRetries;