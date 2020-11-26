import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
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
