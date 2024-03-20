import * as authController from 'controllers/auth.controller';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/signup', authController.signUpController);

authRouter.post('/signin', authController.signInController);

authRouter.post('/otp', authController.sentOtp);

export default authRouter;
