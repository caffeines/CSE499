const server = require('./app');
const chalk = require('chalk');
const configServer = require('./config/server');

const port = Number(process.env.PORT) || configServer.port;
server.listen(port, () => {
  console.log(chalk.bold(`server listening on port ${port}...`));
});
