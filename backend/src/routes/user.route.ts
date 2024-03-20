import { Router } from 'express';
import { validateToken, checkRole } from 'middlewares/auth';
import * as userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/:id', validateToken, checkRole, userController.findOne);
userRouter.patch('/:id', validateToken, checkRole, userController.updateOne);
userRouter.delete('/:id', validateToken, checkRole, userController.deleteOne);

export default userRouter;
