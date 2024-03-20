/* eslint-disable import/extensions */
import CustomError from 'errors/customError';

export default class ValidationError extends CustomError {
  statusCode = 400;

  errorCode = 'BAD_REQUEST';

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
