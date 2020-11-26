export class CustomError extends Error {

  constructor(message = 'Not Found', statusCode = 404) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
