const { envVariableChecker } = require('../lib/utils');

const values = ['AUTH_SERVER_NAME', 'AUTH_SERVER_HOST', 'AUTH_SERVER_APP_LINK'];
envVariableChecker(values);

module.exports = {
  name: process.env.AUTH_SERVER_NAME,
  host: process.env.AUTH_SERVER_HOST,
  port: Number(process.env.AUTH_SERVER_PORT) || 4000,
  appLink: process.env.AUTH_SERVER_APP_LINK,
};
