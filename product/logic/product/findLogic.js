const Product = require('../../models/Product');

const findProductById = async (id) => {
  try {
    const product = await Product.findById({ _id: id });
    
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findProductById = findProductById;