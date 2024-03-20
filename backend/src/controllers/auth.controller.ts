import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { signUp, signIn } from 'services/auth.service';
import sucessResponse from 'utils/common/sucessResponse.utils';
import logger from 'utils/logger.utils';

const signUpController = async (req: Request, res: Response) => {
  logger.info(`Sign up request: ${req.body.email}`);

  const user = await signUp(req.body);
  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

const signInController = async (req: Request, res: Response) => {
  logger.info(`Sign in request: ${req.body.email}`);

  const user = await signIn(req.body);
  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

const sentOtp = async (req: Request, res: Response) => {
  const { email } = req.body;
  logger.info(`Otp request: ${email}`);

  res
    .status(StatusCodes.OK)
    .json(sucessResponse(StatusCodes.OK, { message: 'OTP sent successfully' }));
};

export { signUpController, signInController, sentOtp };
