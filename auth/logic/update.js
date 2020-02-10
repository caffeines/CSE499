const OTP = require('../models/OTP');
const { getOTPObject } = require('../middleware/OTPObject');

const updateOTP = async (username) => {
  try {
    const { OTP, retries, expiresAt, createdAt } = getOTPObject(username);

    const updatedOTP = await OTP.findOneAndUpdate(
      { username },
      {
        $set: { OTP, retries, expiresAt, createdAt }
      },
      { new: true },
    );
    return updatedOTP;
  } catch (error) {
    return Promise.reject(error);
  }
}
exports.updateOTP = updateOTP;

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