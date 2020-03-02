const { createUser } = require('../logic/create');
const { findUserByUsername } = require('../logic/find');

const amqpResolver = {
  createUser : async (username) => {
    try {
      let user = await findUserByUsername(username);
      if (!user) {
        user = await createUser({ username });
      }
      return user;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

exports.amqpResolver = amqpResolver;
