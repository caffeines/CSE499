const { envVariableChecker } = require('../lib/utils');

const values = ['CUSTOMER_SERVER_NAME', 'CUSTOMER_SERVER_HOST', 'CUSTOMER_SERVER_APP_LINK'];
envVariableChecker(values);

module.exports = {
  name: process.env.CUSTOMER_SERVER_NAME,
  host: process.env.CUSTOMER_SERVER_HOST,
  port: Number(process.env.CUSTOMER_SERVER_PORT) || 4001,
  appLink: process.env.CUSTOMER_SERVER_APP_LINK,
};
