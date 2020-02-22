const http = require('http');
const cors = require('cors');
const chalk = require('chalk');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { Kafka } = require('kafkajs');
const configServer = require('./config/server');
const mongoose = require('./config/mongoose');
const response = require('./middleware/response');
const routes = require('./routes/auth');

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(response);
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

mongoose();

const kafka = new Kafka({
  clientId: 'auth',
  brokers: ['kafka:9092']
});
const producer = kafka.producer();

app.use((req, res, next) => {  
  req.producer = producer;
  return next();
});
app.use(routes);

const port = Number(process.env.PORT) || configServer.port;

const run = async () => {
  await producer.connect();
  server.listen(port, () => {
    console.log(chalk.bold(`server listening on port ${port}...`));
  });
}
run().catch(err => { console.log(err) });