const chalk = require('chalk');

const server = require('./app');
const configServer = require('./config/server');
const port = Number(process.env.PORT) || configServer.port;

server.listen(port, () => {
  console.log(chalk.bgGreen(`server listening on port ${port}...`));
});