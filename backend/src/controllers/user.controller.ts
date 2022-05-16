import passport from 'passport';
import { getCustomRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';

import crypto from '@src/utils/crypto';
import UserEntity from '@src/db/entities/user.entity';
import UserRepository from '@src/db/repositories/user.repository';

class UserController {
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
    return null;
  }

  async signUp(req: Request, res: Response) {
    const { email, nickname, password } = req.body;
    const userRepository = getCustomRepository(UserRepository);

    const existUser = await userRepository.findByEmail(email);
    if (existUser) {
      return res.status(409).send('이미 존재하는 이메일입니다.');
    }
    const user = new UserEntity();
    user.email = email;
    user.nickname = nickname;
    user.pwd = await crypto.getHashedPassword(password);
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

  async googleSignIn() {
    passport.authenticate('google', { scope: ['email', 'profile'] });
  }

  async googleCallback() {
    passport.authenticate('google', { failureRedirect: '/' });
  }

  // 'kakao'
  async kakaoSignIn() {
    passport.authenticate('kakao');
  }

  // 'kakao/callback'
  async kakaoCallback() {
    passport.authenticate('kakao', {
      successRedirect: '/',
      failureRedirect: '/', // kakaoStrategy에서 실패한다면 실행
    });
  }
}

export default new UserController();
