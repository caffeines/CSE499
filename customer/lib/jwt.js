const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const verifyAsync = Promise.promisify(jwt.verify);

const verifyToken = async (token) => {
  try {
    const payload = await verifyAsync(token, secret);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') console.error(err);
    return null;
  }
};

exports.verifyToken = verifyToken;