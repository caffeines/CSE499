const createLogic = require('../logic/create');
const findLogic = require('../logic/find');

const resolver = {
  /**
   * @static
   * @async
   * @param {object} username
   * @returns {Promise<Object>} new created user
   */
  createUser: async(userObj) => {
    try {
      const { createUser } = createLogic;
      const { findUserByUsername } = findLogic;
      let user = await findUserByUsername(userObj.username);
      if (!user) {
        user = await createUser(userObj);
      }
      return user;
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
module.exports = resolver;
