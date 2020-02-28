const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const { secret, TTL: jwtTTL } = require('../config/jwt');

const signAsync = Promise.promisify(jwt.sign);

/**
 * @static
 * @async
 * @param {User <Object>} user
 * @return {Promise<String>} JWT token
 */
const createToken = async (user) => {
  const {
    username, role, _id: id,
  } = user;
  let TTL;
  if (role === 'admin' || role === 'moderator') TTL = 50000 * 60;
  const payload = {
    username,
    role,
    id,
  };

  try {
    const token = await signAsync(payload, secret, { expiresIn: TTL || jwtTTL });
    return token;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.createToken = createToken;