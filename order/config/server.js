const { envVariableChecker } = require('../lib/utils');

const values = ['ORDER_SERVER_NAME', 'ORDER_SERVER_HOST', 'ORDER_SERVER_APP_LINK'];
envVariableChecker(values);

module.exports = {
  name: process.env.ORDER_SERVER_NAME,
  host: process.env.ORDER_SERVER_HOST,
  port: Number(process.env.ORDER_SERVER_PORT) || 4000,
  appLink: process.env.ORDER_SERVER_APP_LINK,
};
