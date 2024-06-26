export default abstract class CustomError extends Error {
  abstract statusCode: number;

  abstract errorCode: string;

  constructor(message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
