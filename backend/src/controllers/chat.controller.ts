import { TempChat, TempChatList } from '@src/utils/temp.data';
import { Request, Response } from 'express';

class chatController {
  async getChatList(req: Request, res: Response) {
    try {
      return res.json(TempChatList);
    } catch (err) {
      res.sendStatus(400);
    }
  }
  async getChatRoomDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;

      return res.json(TempChat.filter((data) => data.id === Number(id)));
    } catch (err) {
      res.sendStatus(400);
    }
  }
}

export default new chatController();
