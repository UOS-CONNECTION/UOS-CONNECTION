import { TempData } from '@src/utils/temp.data';
import { NextFunction, Request, Response } from 'express';

class postController {
  // example user
  async temp(req: Request, res: Response, next: NextFunction) {
    try {
      const { postId } = req.params;

      return res.json(TempData[Number(postId) - 1]);
    } catch (err) {
      res.sendStatus(400);
    }
  }

  async getAllPost(req: Request, res: Response) {
    try {
      console.log('send All Data');
      return res.json(TempData);
    } catch (err) {
      res.sendStatus(400);
    }
  }
}

export default new postController();
