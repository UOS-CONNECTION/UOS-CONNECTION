import { TempChat, TempChatList } from '@src/utils/temp.data';
import { NextFunction, Request, Response } from 'express';

class chatController {
  async chatList(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json(TempChatList);
    } catch (err) {
      res.sendStatus(400);
    }
  }
  async chatRoom(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      return res.json(TempChat.filter((data) => data.id === Number(id)));
    } catch (err) {
      res.sendStatus(400);
    }
  }
}

export default new chatController();
