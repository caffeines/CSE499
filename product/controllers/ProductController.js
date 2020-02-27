const { createProduct } = require('../logic/create');

const productController = {
  searchProduct: async (req, res) => {
    try {
      const { name } = req.params;
      const products = await findProductsByName(name);
      res.ok(products);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },
  
  getProductById: async (req, res) => {
    const { id } = req.params;
    console.log('product id: ', id);
    try {
      const product = await findProductById(id);
      if (!product) {
        res.notFound({ message: 'Product not found' });
        return;
      }
      res.ok(product);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  getProducts: async (req, res) => {
    const { id, category, subcategory } = req.params;
    try {
      const products = await findProducts(id, category, subcategory);
      res.ok(products)
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  create: async (req, res) => {
    try {
      const product = await createProduct(req.body);
      res.ok(product);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await updateProduct(id, req.body);
      res.ok(product);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.body;
      await deleteProduct(id);
      res.ok({ message: 'Deleted successfully' });
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },
};
module.exports = productController;