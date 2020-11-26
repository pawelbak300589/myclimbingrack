import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 400;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
