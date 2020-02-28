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
    const re = new RegExp(name);
    const product = await Product.find({ 'name': { $regex: re, $options: 'i' } }).select({ _id: 1, name: 1, picture: 1 });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findProductsByName = findProductsByName;

const findProducts = async (lastId, category, subCategory, page) => {
  try {
    let query = {};
    const limit = 20;
    page = page || 1;
    if (category) query['category'] = category;
    if (subCategory) query['subCategory'] = subCategory;
    if (lastId) query['_id'] = { $gt: lastId };
    const products = await Product.find(query).limit(limit);
    const totalProducts = await Product.countDocuments();
    const hasMore = page * limit < totalProducts;
    return { products, hasMore };
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findProducts = findProducts;

const findByTotalSell = async () => {
  try {
    const product = await Product.find({}).sort({ 'totalNumberOfSell': -1 });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.findByTotalSell = findByTotalSell;

