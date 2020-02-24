const http = require('http');
const cors = require('cors');
const chalk = require('chalk');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { Kafka } = require('kafkajs');
require('dotenv').config({ path: '.env' });
const configServer = require('./config/server');
const mongoose = require('./config/mongoose');
const response = require('./middleware/response');
const routes = require('./routes/customer');
const resolver = require('./resolvers/index');
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
  clientId: 'customer',
  brokers: ['localhost:9092']
});
const producer = kafka.producer();
const topic = 'createUser';
const consumer = kafka.consumer({ groupId: 'customer-group ' });

app.use((req, res, next) => {  
  req.producer = producer;
  return next();
});
app.use(routes);

const port = Number(process.env.PORT) || configServer.port;

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        await resolver[topic]({ username: JSON.parse(message.value.toString()) });
      } catch (err) {
        console.error(err);
        
      }
    }
  });
  await producer.connect();
  server.listen(port, () => {
    console.log(chalk.bold(`server listening on port ${port}...`));
  });
}
run().catch(err => { console.log(err) });