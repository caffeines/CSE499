const Product = require('../../models/Product');

const deleteProductById = async (id) => {
  try {
    
    const product = await Product.findOneAndDelete({ _id: id });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.deleteProductById = deleteProductById;