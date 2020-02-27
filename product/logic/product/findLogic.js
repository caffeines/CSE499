const Product = require('../../models/Product');

const findProductById = async (id) => {
  try {
    const product = await Product.findById({ _id: id });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findProductById = findProductById;

const findProductsByName = async (name) => {
  try {
    const product = await Product.find({ name }).select({ _id: 1, name: 1, picture: 1 });
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findProductsByName = findProductsByName;

const findProducts = async (lastId, category, subCategory, page) => {
  try {
    let query = {};
    const limit = 20;
    if (category) query['category'] = category;
    if (subCategory) query['subCategory'] = subCategory;
    if (!lastId) query['_id'] = { $lt: lastId };
    console.log('Query: ', query);
    const products = await Product.find(query).limit(limit);
    const totalProducts = await Product.countDocuments();
    const hasMore = page * limit < totalProducts;
    return { products, hasMore };
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findProducts = findProducts;
