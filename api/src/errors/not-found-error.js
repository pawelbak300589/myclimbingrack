const CustomError = require('./custom-error.js');

class NotFoundError extends CustomError {
  constructor() {
    const reason = 'Route not found';
    super(reason);
    this.message = reason;
    this.statusCode = 404;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotFoundError;