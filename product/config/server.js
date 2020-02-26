const { envVariableChecker } = require('../lib/utils');

const values = ['PRODUCT_SERVER_NAME', 'PRODUCT_SERVER_HOST', 'PRODUCT_SERVER_APP_LINK'];
envVariableChecker(values);

module.exports = {
  name: process.env.PRODUCT_SERVER_NAME,
  host: process.env.PRODUCT_SERVER_HOST,
  port: Number(process.env.PRODUCT_SERVER_PORT) || 4002,
  appLink: process.env.PRODUCT_SERVER_APP_LINK,
};
