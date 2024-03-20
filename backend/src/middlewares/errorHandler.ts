import { Request, Response } from 'express';
import CustomError from 'errors/customError';
import logger from 'utils/logger.utils';
import errorResponse from 'utils/common/errorResponse.utils';
import { StatusCodes } from 'http-status-codes';

export default (error: Error, req: Request, res: Response) => {
  logger.error(error.message);
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .json(errorResponse(error.statusCode, error.message, error.details));
  }

  return res
    .status(500)
    .json(
      errorResponse(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Internal Server Error, Please try again later.',
        'Internal Server Error, Please try again later.'
      )
    );
};
