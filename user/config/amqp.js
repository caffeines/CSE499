const { envVariableChecker } = require('../lib/utils');

const values = ['AMQP_HOST'];
envVariableChecker(values);

module.exports = {
  host: process.env.AMQP_HOST,
};