import { NextFunction, Request, Response } from 'express';

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

  async signUp(req: Request, res: Response, next: NextFunction) {}

  async signIn(req: Request, res: Response, next: NextFunction) {}

  async signOut(req: Request, res: Response, next: NextFunction) {}

  async naverSignIn(req: Request, res: Response) {}

  async googleSignIn(req: Request, res: Response) {}

  async kakaoSignIn(req: Request, res: Response) {}

  getUserData(req: Request, res: Response) {}

  async updateUser(req: Request, res: Response) {}
}

export default new userController();
