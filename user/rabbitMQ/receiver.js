const amqp = require('amqplib');
const chalk = require('chalk');
// const { queue } = require('../constant/amqp');
const { host } = require('../config/amqp');
const { amqpResolver } = require('../resolver/index');


const amqpReceiver = async () => {
  const queue = 'user';
  try {
    const connection = await amqp.connect(`${host}`);
    const channel = await connection.createChannel();
    const que = await channel.assertQueue(queue, { durable: true });
    await channel.prefetch(1);
    console.log(chalk.blue('Awaiting for RPC request'));
    channel.consume(queue, async function reply(msg) {
      const content = JSON.parse(msg.content.toString());
      console.log(chalk.black.bgYellow.bold('AMQP '), `Message: `, content);

      const { username, resolver } = content;
      let res;
      if (!amqpResolver[resolver]) {
        res = { error: 'Invalid resolver', status: 400 };
      }
      else res = {
        data: await amqpResolver[resolver](username),
        status: 200
      };
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