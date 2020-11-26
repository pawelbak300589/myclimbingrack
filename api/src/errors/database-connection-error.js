import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
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
