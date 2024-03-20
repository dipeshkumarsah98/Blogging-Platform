import ValidationError from 'errors/badRequestError';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { signUp, signIn } from 'services/auth.service';
import { userExist } from 'services/user.service';
import sucessResponse from 'utils/common/sucessResponse.utils';
import logger from 'utils/logger.utils';
import * as mailerService from 'services/mailer.service';
import { generateOtp } from 'utils/auth/otp.utils';

const signUpController = async (req: Request, res: Response) => {
  logger.info(`Sign up request: ${req.body.email}`);

  const { token, ...userDetails } = req.body;
  const user = await signUp(userDetails);
  mailerService.sendWelcome({
    email: user.email,
    name: user.username,
  });
  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

const signInController = async (req: Request, res: Response) => {
  logger.info(`Sign in request: ${req.body.email}`);

  const user = await signIn(req.body);
  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

const sentOtp = async (req: Request, res: Response) => {
  const { email, username } = req.body;
  logger.info(`Otp request: ${email}`);

  const user = await userExist({
    email,
    username,
  });

  if (user) {
    throw new ValidationError('Email or username already exist');
  }

  const otp = generateOtp();

  mailerService.sendOtp({
    email,
    name: username,
    otp,
  });

  res
    .status(StatusCodes.OK)
    .json(sucessResponse(StatusCodes.OK, { message: 'OTP sent successfully' }));
};

export { signUpController, signInController, sentOtp };
