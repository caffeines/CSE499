const mongoose = require('mongoose');
const Product = require('../../models/Product');

const updateProduct = (id, options) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, options, { new: true });
    return product;
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.updateProduct = updateProduct;

const makeSell = (id) => {
  try {
    const product = await findOneAndUpdate({ _id: id }, {
      $inc: { totalNumberOfSell: 1, totalUnit: -1 }
    }, { new: true });
  } catch (err) {
    return Promise.reject(err);
  }
}
exports.makeSell = makeSell;

const makeDiscount = (id, parcent) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let product = await Product.findById({ _id: id }).session(session);
    const price = Math.ceil(product.price - (product.price * parcent / 100));
    const discountPrice = {
      amount: parcent,
      originalPrice: product.price,
    };
    product = await Product.findOneAndUpdate({ _id: id }, { discountPrice, price }).session(session);
    return product;

    await session.commitTransaction();
  } catch (err) {
    await session.abortTransaction();
    return Promise.reject(err);
  } finally {
    session.endSession();
  }
}

exports.makeDiscount = makeDiscount;

const makeDiscountZero = (id) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let product = await Product.findById({ _id: id }).session(session);
    const price = product.discountPrice.originalPrice;
    const discountPrice = { amount: 0 };
    product = await Product.findOneAndUpdate({ _id: id }, { discountPrice, price }).session(session);
    return product;
    
    await session.commitTransaction();
  } catch (err) {
    await session.abortTransaction();
    return Promise.reject(err);
  } finally {
    session.endSession();
  }
}
exports.makeDiscountZero = makeDiscountZero;