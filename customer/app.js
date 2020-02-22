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
// const routes = require('./routes/auth');

const createLogic = require('./logic/create');
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
  brokers: ['kafka:9092']
});
// const producer = kafka.producer();
const topic = 'CreateUser';
const consumer = kafka.consumer({ groupId: 'customer-group ' });

// app.use((req, res, next) => {  
//   req.producer = producer;
//   return next();
// });
// app.use(routes);

const port = Number(process.env.PORT) || configServer.port;

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // console.log({
      //   partition,
      //   offset: message.offset,
      //   value: message.value.toString(),
      // });
      const customer = await createLogic.createUser({ username: message.value.toString() });
      console.log(customer);
      
    }
  });
  // await producer.connect();
  server.listen(port, () => {
    console.log(chalk.bold(`server listening on port ${port}...`));
  });
}
run().catch(err => { console.log(err) });