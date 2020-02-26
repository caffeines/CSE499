const findLogic = require('../logic/find');
const updateLogic = require('../logic/update');

const UserController = {
  profile: async (req, res) => {
    try {
      const { username } = req.admin || req.user;
      const { findUserByUsername } = findLogic;
      const user = await findUserByUsername(username);
      if (!user) {
        res.notFound({ message: 'User not found' });
        return;
      }
      res.ok(user);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },
  updateProfile: async (req, res) => {
    try {
      const { username } = req.user;
      const { name, profilePic, address } = req.body;      
      const { updateProfile } = updateLogic;
      const updatedUser = await updateProfile(username, { name, profilePic, address });
      res.ok(updatedUser);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  }
};
module.exports = UserController;