const Product = require('../../models/Product');


const createProduct = async (productObj) => {
  try {
    const newProduct = await new Product(productObj).save();
    return newProduct; 
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.createProduct = createProduct;