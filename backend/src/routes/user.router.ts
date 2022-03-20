import userController from '@src/controllers/user.controller';
import { Request, Response, Router } from 'express';

const userRouter = Router();

userRouter.get('/', userController.temp);

userRouter.post('/login', userController.signIn);

export default userRouter;
