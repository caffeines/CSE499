const { createProduct } = require('../logic/product/create');
const { updateProductById } = require('../logic/product/update');
const { deleteProductById } = require('../logic/product/delete');
const {
  findByTotalSell, findProductById, findProducts, findProductsByName
} = require('../logic/product/find');
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
    const { lastId, category, subcategory, page } = req.query;
    try {      
      const products = await findProducts(lastId, category, subcategory, page);
      res.ok(products)
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = await createProduct(req.body);
      res.ok(product);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await updateProductById(id, req.body);
      res.ok(product);
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.body;      
      await deleteProductById(id);
      res.ok({ message: 'Deleted successfully' });
    } catch (err) {
      console.log(err);
      res.serverError({ message: 'Something went wrong' });
    }
  },
};
module.exports = productController;