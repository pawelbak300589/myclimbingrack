const CustomError = require('./custom-error.js');

class DatabaseConnectionError extends CustomError {
  constructor() {
    const reason = 'Error connecting to database';
    super(reason);
    this.message = reason;
    this.statusCode = 500;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = DatabaseConnectionError;