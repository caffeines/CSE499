const { verifyToken } = require('../lib/jwt');

const authenticate = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (typeof bearer === 'undefined') {
    res.unauthorized({ message: 'Not logged in' });
  }
  if (typeof bearer !== 'undefined') {
    const [, token] = bearer.split(' ');
    try {
      const payload = await verifyToken(token);
      if (!payload) {
        res.unauthorized({ message: 'unauthorized' });
        return;
      }
      if (payload.role === 'admin') {
        req.admin = payload;
        next();
      } 
      else if (payload.role === 'owner') {
        req.owner = payload;
        req.admin = payload;
        next();
      } else {
        req.user = payload;
        next();
      }
    } catch (err) {
      console.error(err);
      res.serverError({ message: 'Somthing went wrong' });
    }
  }
};
exports.authenticate = authenticate;

const authorizeAdmin = (req, res, next) => {
  if (req.admin) {
    next();
    return;
  }
  res.forbidden({ message: 'forbidden' });
};
exports.authorizeAdmin = authorizeAdmin;

const authorizeOwner = (req, res, next) => {
  if (req.owner) {
    next();
    return;
  }
  res.forbidden({ message: 'forbidden' });
};
exports.authorizeOwner = authorizeOwner;