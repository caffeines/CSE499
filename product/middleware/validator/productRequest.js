const mongoose = require('mongoose');

const productCreateValidator = (req, res, next) => {
  const userInfo = Object.keys(req.body);
  const allowedInfo = ['name', 'price', 'totalUnit', 'unit', 'size', 'description', 'picture', 'category', 'subCategory'];
  const isValidOperation = userInfo.every((info) => allowedInfo.includes(info));

  if (!isValidOperation) {    
    res.badRequest({ message: 'Invalid request' });
    return;
  }
  
  let bad = false;
  allowedInfo.forEach(info => {
    if (!req.body[info]) {      
      bad = true;
    }
    if (info === 'picture' ) {
      if(!req.body[info] || !req.body[info].length) {
        bad = true;
      }
    }
  });
  if (bad) {
    res.badRequest({ message: 'Invalid request' });
    return;
  }
  next();
}
exports.productCreateValidator = productCreateValidator;

const deleteProductValidator = (req, res, next) => {
  const { id } = req.body;
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!id || !isValid) {
    res.badRequest({ message: 'Invalid request' });
    return;
  }
  next();
}
exports.deleteProductValidator = deleteProductValidator;