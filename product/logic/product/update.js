const mongoose = require('mongoose');
const Product = require('../../models/Product');

const updateProductById = async (id, options) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, options, { new: true });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.updateProductById = updateProductById;

const makeSell = async (id) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, {
      $inc: { totalNumberOfSell: 1, totalUnit: -1 }
    }, { new: true });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.makeSell = makeSell;

const makeDiscount = async (id, parcent) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let product = await Product.findById({ _id: id });
    const price = Math.ceil(product.price - (product.price * parcent / 100));
    const discountPrice = {
      amount: parcent,
      originalPrice: product.price,
    };
    product = await Product.findOneAndUpdate({ _id: id }, { discountPrice, price }, { new: true });
    await session.commitTransaction();
    return product;
  } catch (err) {
    await session.abortTransaction();
    return Promise.reject(err);
  } finally {
    session.endSession();
  }
}

exports.makeDiscount = makeDiscount;

const makeDiscountZero = async (id) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let product = await Product.findById({ _id: id });// .session(session);    
    const price = product.discountPrice.originalPrice;
    const discountPrice = { amount: 0, originalPrice: price };
    product = await Product.findOneAndUpdate({ _id: id }, { discountPrice, price }, { new: true });// .session(session);
    await session.commitTransaction();
    return product;
  } catch (err) {
    await session.abortTransaction();
    return Promise.reject(err);
  } finally {
    session.endSession();
  }
}
exports.makeDiscountZero = makeDiscountZero;