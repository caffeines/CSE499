const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const verifyAsync = Promise.promisify(jwt.verify);

const verifyToken = async (token) => {
  try {
    const payload = await verifyAsync(token, secret);
    return payload;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.verifyToken = verifyToken;