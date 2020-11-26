import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
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
