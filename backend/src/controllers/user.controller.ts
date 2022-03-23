import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

import UserEntity from '@src/db/entities/user.entity';

class userController {
  // example user
  async temp(req: Request, res: Response, next: NextFunction) {
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

  async signUp(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('/signup', {
      title: 'Create Account',
    });
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
      }
    )(req, res, next);
  }

  async signOut(req: Request, res: Response, next: NextFunction) {}

  async naverSignIn(req: Request, res: Response) {}

  async googleSignIn(req: Request, res: Response) {}

  async kakaoSignIn(req: Request, res: Response) {}

  getUserData(req: Request, res: Response) {}

  async updateUser(req: Request, res: Response) {}
}

export default new userController();
