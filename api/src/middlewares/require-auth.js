const { NotAuthorizedError } = require('../errors/index.js');

const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};

module.exports = requireAuth;
