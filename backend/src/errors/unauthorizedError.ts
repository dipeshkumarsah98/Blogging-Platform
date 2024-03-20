/* eslint-disable import/extensions */
import CustomError from 'errors/customError';

export default class UnauthorizedError extends CustomError {
  statusCode = 401;

  errorCode = 'UNAUTHORIZED';

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
