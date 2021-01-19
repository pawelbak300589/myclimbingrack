const CustomError = require('../errors/custom-error.js');

const errorHandler = (err, req, res, next) => {
  switch (true) {
    case typeof err === 'string':
      // custom application error
      const is404 = err.toLowerCase().endsWith('not found');
      const statusCode = is404 ? 404 : 400;
      return res.status(statusCode).json({ message: err });
    case err instanceof CustomError:
      return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    case err.name === 'UnauthorizedError':
      // jwt authentication error
      return res.status(401).json({ message: 'Unauthorized' });
    default:
      return res.status(500).json({ message: err.message });
  }
};

module.exports = errorHandler;