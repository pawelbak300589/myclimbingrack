const CustomError = require('./custom-error.js');

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 400;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

exports.BadRequestError = BadRequestError;