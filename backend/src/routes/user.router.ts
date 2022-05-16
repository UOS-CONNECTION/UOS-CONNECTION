import userController from '@src/controllers/user.controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', userController.temp);

userRouter.post('/login', userController.signIn);
userRouter.post('/signup', userController.signUp);

userRouter.get('/kakao', userController.kakaoSignIn);

userRouter.get('/kakao/callback', userController.kakaoCallback);

export default userRouter;
