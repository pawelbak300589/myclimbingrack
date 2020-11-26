import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
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
