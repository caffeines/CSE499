const productCreateValidator = (req, res, next) => {
  const userInfo = Object.keys(req.body);
  const allowedInfo = ['name', 'price', 'totalUnit', 'unit', 'size', 'description', 'picture', 'category'];
  const isValidOperation = userInfo.every((info) => allowedInfo.includes(info));

  if (!isValidOperation) {
    res.badRequest({ message: 'Invalid request' });
    return;
  }
  const { name } = req.body;
  let bad = false;
  allowedInfo.forEach(info => {
    if (!req.body[info]) {
      bad = true;
    }
    if (info === 'picture' ) {
      if(!req.body[info] || req.body[info].length) {
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