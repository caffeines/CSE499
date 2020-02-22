const { type } = require('../constant/amqpType');
const resolve = async (msg) => {
  const msgType = type[msg.type];
  if (!msgType) return null;
  if (msg.type == 'addNewUser') {
    // TODO: add business logic
    
  }
};
exports.resolve = resolve;
