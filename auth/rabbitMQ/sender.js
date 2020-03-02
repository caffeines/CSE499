const amqp = require('amqplib');
const uuid = require('uuid/v4');
const chalk = require('chalk');
const { host } = require('../config/amqp');


const amqpSender = (toQueue, content) => {
  return new Promise(async (resolve, reject) => {
    try {    
      const connection = await amqp.connect(`${host}`);
      const channel = await connection.createChannel();
      const que = await channel.assertQueue('', { exclusive: true });
  
      const correlationId = uuid();
      const buffer = Buffer.from(JSON.stringify(content));
  
      channel.sendToQueue(
        toQueue,
        buffer,
        { correlationId: correlationId, replyTo: que.queue }
      );
  
      console.log(chalk.black.bgYellow.bold('AMQP '),`Message send to Queue: ${toQueue}, Message: `, content);
      
      channel.consume(que.queue, (msg) => {
        if (msg.properties.correlationId == correlationId) {
          console.log(chalk.black.bgYellow.bold('AMQP '), `Got message: ${msg.content.toString()} from Queue: ${toQueue}`);
          setTimeout(() => {
            connection.close();
          }, 500);
          resolve(JSON.parse(msg.content.toString()));
        }
      }, { noAck: true });
    } catch (err) {
      reject(err);
    }
  });
};

exports.amqpSender = amqpSender;