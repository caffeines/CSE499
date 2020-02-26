const { createProduct } = require('../logic/create');

const productController = {
  create: async (req, res) => {
    try {
      const product = await createProduct(req.body);
      res.ok(product);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  }
};
module.exports = productController;