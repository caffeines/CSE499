const { formatNumber } = require('../../lib/phoneNumber');

const usernameValidator = (req, res, next) => {
  const { username } = req.body;
  if (!username) {
    res.badRequest({ message: 'Username required' });
    return;
  }
  const { isValid } = formatNumber(username);
  if (!isValid) {
    res.badRequest({ message: 'Contact number is not valid' });
    return;
  }
  next();
}
exports.usernameValidator = usernameValidator;

const otpValidator = (req, res, next) => {
  const { otp } = req.body;
  if (!otp) {
    res.badRequest({ message: 'OTP not provided' });
    return;
  }
  next();
}
exports.otpValidator = otpValidator;