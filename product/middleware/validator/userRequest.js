const userUpdateValidator = (req, res, next) => {
  const userInfo = Object.keys(req.body);
  const allowedInfo = ['name', 'profilePic', 'address'];
  const isValidOperation = userInfo.every((info) => allowedInfo.includes(info));

  if (!isValidOperation) {
    res.badRequest({ message: 'Invalid request' });
    return;
  }
  const { name } = req.body;
  if (!name) {
    res.badRequest({ message: 'Name is required' });
    return;
  }
  next();
}
exports.userUpdateValidator = userUpdateValidator;