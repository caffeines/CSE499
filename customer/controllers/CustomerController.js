const findLogic = require('../logic/find');
const createLogic = require('../logic/create');

const CustomerController = {
  profile: async (req, res) => {
    try {
      const { username } = req.params;
      const { findUserByUsername } = findLogic;
      const customer = await findUserByUsername(username);
      res.ok(customer);
    } catch (err) {
      res.serverError(err);
    }
  }
};
module.exports = CustomerController;