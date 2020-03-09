const { createOrder } = require('../logic/create');

const orderController = {
  createOrder: async (req, res) => {
    try {
      const order = await createOrder(req.body);
      res.ok(order);
    } catch (err) {
      res.serverError(err);
    }
  },
  
};
module.exports = orderController;