const ValidationError = require('express-validator');
const CustomError = require('./custom-error.js');

class RequestValidationError extends CustomError {
  constructor(errors) {
    const reason = 'Invalid request parameters';
    super(reason);
    this.message = reason;
    this.errors = errors;
    this.statusCode = 400;
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}

module.exports = RequestValidationError;
