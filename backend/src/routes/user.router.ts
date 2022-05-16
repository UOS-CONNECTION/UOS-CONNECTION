import UserController from '@src/controllers/user.controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', UserController.temp);

userRouter.post('/login', UserController.signIn);
userRouter.post('/signup', UserController.signUp);

userRouter.get('/kakao', UserController.kakaoSignIn);

userRouter.get('/kakao/callback', UserController.kakaoCallback);

userRouter.get('/google', UserController.googleSignIn);

userRouter.get('/google/callback', UserController.googleCallback);

export default userRouter;
