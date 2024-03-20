import CustomError from 'errors/customError';

export default class NotFoundError extends CustomError {
  statusCode = 404;

  errorCode = 'NOT_FOUND';

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
