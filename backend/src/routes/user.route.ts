import { Router } from 'express';
import validateToken from 'middlewares/auth';
import * as userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/:id', validateToken, userController.findOne);
userRouter.patch('/:id', validateToken, userController.updateOne);
userRouter.delete('/:id', validateToken, userController.deleteOne);

export default userRouter;
