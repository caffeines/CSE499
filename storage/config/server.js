const { envVariableChecker } = require('../lib/utils');

const values = ['STORAGE_SERVER_NAME', 'STORAGE_SERVER_HOST', 'STORAGE_SERVER_APP_LINK'];
envVariableChecker(values);

module.exports = {
  name: process.env.STORAGE_SERVER_NAME,
  host: process.env.STORAGE_SERVER_HOST,
  port: Number(process.env.STORAGE_SERVER_PORT) || 4000,
  appLink: process.env.STORAGE_SERVER_APP_LINK,
};
