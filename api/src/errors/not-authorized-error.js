const CustomError = require('./custom-error.js');

class NotAuthorizedError extends CustomError {
  constructor() {
    const reason = 'Not Authorized';
    super(reason);
    this.message = reason;
    this.statusCode = 401;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotAuthorizedError;