const { validationResult } = require('express-validator');

const { RequestValidationError } = require('../errors/index.js');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    next(new RequestValidationError(errors.array()));
  }

  next();
};

module.exports = validateRequest;
