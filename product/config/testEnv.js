const { envVariableChecker } = require('../lib/utils');

const values = ['JWT_TEST_TOKEN', 'JWT_PUBLIC_TOKEN'];
envVariableChecker(values);


module.exports = {
  jwtToken: process.env.JWT_TEST_TOKEN,
  jwtPublicToken: process.env.JWT_PUBLIC_TOKEN
};