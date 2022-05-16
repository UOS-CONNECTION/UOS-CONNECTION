/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

import crypto from '@src/utils/crypto';
import UserEntity from '@src/db/entities/user.entity';
import UserRepository from '@src/db/repositories/user.repository';
import { getCustomRepository } from 'typeorm';

class userController {
  // example user
  async temp(req: Request, res: Response) {
    try {
      // const UserRepository = getCustomRepository(UserRepository)
      return res.json({
        user_name: '이상민',
        user_email: 'poiu694',
      });
    } catch (err) {
      res.sendStatus(400);
    }
  }

  async signUp(req: Request, res: Response) {
    const { email, nickname, password } = req.body;

    const user = new UserEntity();
    user.email = email;
    user.nickname = nickname;
    user.pwd = await crypto.getHashedPassword(password);
    const userRepository = getCustomRepository(UserRepository);
    userRepository.save(user);

    return res.status(200).send('회원가입에 성공했습니다.');
  }

  signIn(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      'local',
      async (err: Error, user: UserEntity, info: { message: string }) => {
        if (err) {
          return res.status(409).send(info.message);
        }

        if (!info) {
          return res.status(401).send(info.message);
        }

        return res.status(200).send(user);
      },
    )(req, res, next);
  }

  // async signOut(req: Request, res: Response, next: NextFunction) {}

  // async naverSignIn(req: Request, res: Response) {}

  // async googleSignIn(req: Request, res: Response) {}

  // 'kakao'
  async kakaoSignIn(req: Request, res: Response) {
    console.log('[Kakao] kakao login');
    passport.authenticate('login-kakao');
  }

  // 'kakao/callback'
  async kakaoCallback(req: Request, res: Response, next: NextFunction) {
    console.log('[Kakao] kakao callback');
    passport.authenticate('login-kakao', {
      successRedirect: '/',
      failureRedirect: '/', // kakaoStrategy에서 실패한다면 실행
    });
  }

  getUserData(req: Request, res: Response) {}

  async updateUser(req: Request, res: Response) {}
}

export default new userController();
