/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import NotFoundError from 'errors/notFoundError';

export const notFoundHandler = (req: Request, res: Response) => {
  throw new NotFoundError('Invalid route, The requested route does not exist.');
};
