const { verifyToken } = require('../lib/jwt');

const authenticate = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (typeof bearer === 'undefined') {
    res.forbidden({ message: 'not logged in' });
  }
  if (typeof bearer !== 'undefined') {
    const [, token] = bearer.split(' ');
    try {
      const payload = await verifyToken(token);
      if (!payload) res.unauthorized({ message: 'unauthorized' });
      if (payload.role === 'admin' || payload.role === 'owner') {
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

const authorizeAdminOrOwner = (req, res, next) => {
  if (req.admin) {
    next();
    return;
  }
  res.forbidden({ message: 'forbidden' });
};
exports.authorizeAdminOrOwner = authorizeAdminOrOwner;