import * as authController from 'controllers/auth.controller';
import { Router } from 'express';
import { validateOtp } from 'middlewares/auth';

const authRouter = Router();

authRouter.post('/signup', validateOtp, authController.signUpController);

authRouter.post('/signin', authController.signInController);

authRouter.post('/otp', authController.sentOtp);

export default authRouter;
