import CustomError from 'errors/customError';

export default class ServerError extends CustomError {
  statusCode = 500;

  errorCode = 'INTERNAL_SERVER_ERROR';

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ServerError.prototype);
  }
}
