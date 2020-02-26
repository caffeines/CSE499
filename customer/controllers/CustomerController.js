const findLogic = require('../logic/find');
const createLogic = require('../logic/create');

const UserController = {
  profile: async (req, res) => {
    try {
      const { username } = req.admin || req.user ;      
      const { findUserByUsername } = findLogic;
      const user = await findUserByUsername(username);
      if (!user) {
        res.notFound({ message: 'User not found' });
        return;
      }
      res.ok(user);
    } catch (err) {
      console.log(err);
      res.serverError(err);
    }
  }
};
module.exports = UserController;