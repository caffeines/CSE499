module.exports = {
  retries: Number(process.env.OTP_RETRIES) || 3,
  TTL: Number(process.env.SERVER_PORT) || 5,
};
