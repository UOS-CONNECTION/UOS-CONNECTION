import chatController from '@src/controllers/chat.controller';
import { Request, Response, Router } from 'express';

const chatRouter = Router();

chatRouter.get('/list', chatController.chatList);
chatRouter.get('/room/:id', chatController.chatRoom);

export default chatRouter;
