import { Response, Request, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';
import UnauthorizedError from 'errors/unauthorizedError';
import envVars from 'config/env.config';
import { verifyOtp } from 'utils/auth/otp.utils';
import ValidationError from 'errors/badRequestError';
import logger from 'utils/logger.utils';

/**
 *
 * Validate whether user is authorized to access the resource
 */
const validateToken = (req: Request, res: Response, next: NextFunction) => {
  // getting token from header
  const key: string = envVars.JWT_SECRET_KEY;
  const authHeader = req.headers.authorization;
  // the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
  const token = authHeader ? authHeader.split(' ')[1] : null;
  if (!token) {
    throw new UnauthorizedError('Access Denied: No token provided.');
  }
  Jwt.verify(token, key, (err, user) => {
    // if token is invalid or expired
    if (err) {
      throw new UnauthorizedError(
        'Access Denied: Token is invalid or expired.'
      );
    } else {
      // provided token is valid
      req.user = user;
      next();
    }
  });
  return null;
};

/**
 *
 * Validate the OTP token
 */
const validateOtp = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Validating OTP token');
  const { token } = req.body;
  if (!token) throw new ValidationError('Token is required.');

  const isValidToken = verifyOtp(token);

  if (!isValidToken) throw new ValidationError('Token is expired or invalid.');

  next();
};

/**
 *
 * Check if the user is the owner of the resource
 */
const checkRole = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const { user } = req;

  if (id !== user.id) {
    throw new UnauthorizedError(
      'Sorry you do not have access to this resource.'
    );
  }
  next();
};

export { validateToken, validateOtp, checkRole };
