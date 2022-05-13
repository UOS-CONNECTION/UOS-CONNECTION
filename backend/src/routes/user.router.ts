import UserController from '@src/controllers/user.controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', UserController.temp);

userRouter.post('/login', UserController.signIn);

userRouter.get('/kakao', UserController.kakaoSignIn);

userRouter.get('/kakao/callback', UserController.kakaoCallback);

export default userRouter;
