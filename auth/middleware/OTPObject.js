const { retries, TTL } = require('../config/otp');
const { cryptoRandomString } = require('../lib/utils');

const getOTPObject = async(username) => {
  const timestamp = Date.now();
  const createdAt = new Date(timestamp);
  const expiresAt = new Date(timestamp + (TTL * 60000));
  let OTP = await cryptoRandomString(6, {
    upperCase: false, lowerCase: false, numeric: true,
  });
  if (process.env.NODE_ENV === 'test') { OTP = '111111'; }
  return {
    username,
    createdAt,
    expiresAt,
    OTP,
  }
};
exports.getOTPObject = getOTPObject;