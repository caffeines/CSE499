const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const { secret, TTL: jwtTTL } = require('../config/jwt');

const signAsync = Promise.promisify(jwt.sign);
const verifyAsync = Promise.promisify(jwt.verify);

/**
 * @static
 * @async
 * @param {User <Object>} user
 * @return {Promise<String>} JWT token
 */
const createToken = async (user) => {
  const {
    username, _id: id,
  } = user;
  const TTL = 50000 * 60;
  const payload = {
    username,
    role: 'customer',
    id,
  };

  try {
    const token = await signAsync(payload, secret, { expiresIn: TTL || jwtTTL });
    return token;
  } catch (err) {
    error(err);
    return null;
  }
};

exports.createToken = createToken;

const verifyToken = async (token) => {
  try {
    const payload = await verifyAsync(token, secret);
    return payload;
  } catch (err) {
    error(err);
    return null;
  }
};

exports.verifyToken = verifyToken;