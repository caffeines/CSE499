const { retries, TTL } = require('../config/otp');
const { cryptoRandomString } = require('../lib/utils');

const getOTPObject = (username) => {
  const timestamp = Date.now();
  const createdAt = new Date(timestamp);
  const expiresAt = new Date(timestamp + (TTL * 60000));
  const OTP = cryptoRandomString(6, {
    upperCase: false, lowerCase: false, numeric: true,
  });
  return {
    username,
    createdAt,
    expiresAt,
    OTP,
    retries,
  }
};
exports.getOTPObject = getOTPObject;