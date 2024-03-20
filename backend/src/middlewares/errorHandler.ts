/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { NextFunction, Request, Response } from 'express';
import CustomError from 'errors/customError';
import errorResponse from 'utils/common/errorResponse.utils';
import { StatusCodes } from 'http-status-codes';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .json(errorResponse(error.statusCode, error.message));
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json(
      errorResponse(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Internal Server Error, Please try again later.'
      )
    );
};

export default errorHandler;
