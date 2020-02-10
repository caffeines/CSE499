const updateLogic = require('../../logic/update');
const deleteLogic = require('../../logic/delete');
const findLogic = require('../../logic/find');
const createLogic = require('../../logic/create');

module.exports = {
  post_enter: [
    // usernameValidator
    async (req, res) => {
      const { insertOTP } = createLogic;
      const { contact } = req.body;
      try {
        const insertedOtp = await insertOTP(contact);
        res.ok(insertedOtp);
      } catch (error) {
        console.log(error);
        res.serverError({ message: 'Something went wrong' });
      }
    }
  ],
  post_verifyOtp: [
    // verfyValidator
    async (req, res) => {
      const { findOTP } = findLogic;
      const { deleteUser } = deleteLogic;
      const { decrementRetries } = updateLogic;
      const { otp, username } = req.body;

      try {
        const foundOTP = await findOTP(username, otp);
        if (foundOTP && foundOTP.OTP === otp && foundOTP.retries > 0) {
          // TODO find user if not exist create new user
          const user = await deleteUser(username);
          res.ok({ message: 'User OTP verified' });
        } else if (foundOTP && foundOTP.OTP !== otp && foundOTP.retries > 0) {
          await decrementRetries(username);
        }
        res.notFound({ message: 'OTP not matched' });
      } catch (error) {
        console.log(error);
        res.serverError({ message: 'Something went wrong' });
      }
    }
  ],
  post_resendOtp: [
    // usernameValidator
    async (req, res) => {
      try {
        const { username } = req.body;
        const { updateOTP } = updateLogic;
        const updatedOPT = await updateOTP(username);
        res.ok(updatedOPT);
      } catch (err) {
        console.error(err);
        res.serverError({ message: 'Something went wrong' });
      }
    }
  ]
}