const amqp = require('amqplib');

const { queue } = require('../constant/amqp');
const { host, port } = require('../config/amqp');


const amqpReceiver = async (toQueue, content) => {
  try {
    const connection = await amqp.connect(`${host}:${port}`);
    const channel = await connection.createChannel();
    const que = await channel.assertQueue(queue, { durable: true });
    await channel.prefetch(1);
    console.log('Awaiting RPC request');

    channel.consume(queue, function reply(msg) {
      const content = JSON.parse(msg.content.toString());
      // ADD business logic
      const res = '';
      const buffer = Buffer.from(JSON.stringify(res));
      channel.sendToQueue(
        msg.properties.replyTo,
        buffer,
        { correlationId: msg.properties.correlationId }
        );
        channel.ack(msg);
    });
  } catch (err) {
    console.error(err);
  }
};
exports.amqpReceiver = amqpReceiver;