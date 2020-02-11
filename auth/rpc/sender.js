const amqp = require('amqplib');
const uuid = require('uuid/v4');

const { host, port } = require('../config/amqp');


const amqpSender = async (toQueue, content) => {
  try {
    const connection = await amqp.connect(`${host}:${port}`);
    const channel = await connection.createChannel();
    const que = await channel.assertQueue('', { exclusive: true });

    const correlationId = uuid();
    const buffer = Buffer.from(JSON.stringify(content));

    channel.sendToQueue(
      toQueue,
      buffer,
      { correlationId: correlationId, replyTo: que.queue }
    );
    
    console.log(`Message send to Queue: ${toQueue}, Message: ${content}`);

    channel.consume(que.queue, (msg) => {
      if (msg.properties.correlationId == correlationId) {
        console.log('Got message: %s', msg.content.toString());
        setTimeout(() => {
          connection.close();
          process.exit(0)
        }, 500);
      }
    }, { noAck: true });
  } catch (err) {
    console.error(err);
  }
};

exports.amqpSender = amqpSender;