import { TempData } from '@src/utils/temp.data';
import { NextFunction, Request, Response } from 'express';

class postController {
  // example user
  async temp(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      return res.json(TempData[Number(id) - 1]);
    } catch (err) {
      res.sendStatus(400);
    }
  }
}

export default new postController();
