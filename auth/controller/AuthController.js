const UUID = require('uuid/v4');
const updateLogic = require('../logic/update');
const deleteLogic = require('../logic/delete');
const findLogic = require('../logic/find');

const AuthController = {
  /**
   * POST /api/auth/enter
   * Send OTP through SMS
   * Expoects: {
   *    body:  { username }
   * }
   */
  enter: async (req, res, next) => {
    const { insertOTP } = updateLogic;
    const { username } = req.body;
    try {
      const insertedOtp = await insertOTP(username);
      // TODO: send sms
      res.ok({ message: 'OTP sent successfully' });
    } catch (error) {
      console.log(error);
      res.serverError({ message: 'Something went wrong' });
    }
  },
  /**
   * POST /api/auth/verify-otp
   * Verify OTP
   * Expoects: {
   *    body:  { username, otp }
   * }
   */
  verifyOtp: async (req, res) => {
    const { findOTP } = findLogic;
    const { deleteUser } = deleteLogic;
    const { decrementRetries } = updateLogic;
    const { otp, username } = req.body;

    try {
      const foundOTP = await findOTP(username, otp);
      if (foundOTP && foundOTP.OTP === otp && foundOTP.retries > 0) {
        const message = JSON.stringify(username);
        const userMsg = { id: UUID(), msg: message };
        req.authClient.createUser(userMsg, async(err, response) => {
          if (err) {
            console.error(err);
            res.serverError({ message: 'Something went wrong' });
            return;
          }
          const {id, msg} = response;
          if (id === userMsg.id) {
            await deleteUser(username);
            res.ok({ message: 'User OTP verified', token: 'username' });
          }
        });
        return;
      } else if (foundOTP && foundOTP.OTP !== otp && foundOTP.retries > 0) {
        await decrementRetries(username);
      }
      res.notFound({ message: 'OTP not matched' });
    } catch (error) {
      console.log(error);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  /**
   * POST /api/auth/resend-otp
   * Verify OTP
   * Expoects: {
   *    body:  { username }
   * }
   */
  resendOtp: async (req, res) => {
    try {
      const { username } = req.body;
      const { insertOTP } = updateLogic;
      const updatedOPT = await insertOTP(username);
      res.ok({ message: 'OTP sent successfully' });
    } catch (err) {
      console.error(err);
      res.serverError({ message: 'Something went wrong' });
    }
  }

};
module.exports = AuthController;