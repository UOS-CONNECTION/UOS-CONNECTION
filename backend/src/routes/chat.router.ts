import chatController from '@src/controllers/chat.controller';
import { Router } from 'express';

const chatRouter = Router();

chatRouter.get('/list', chatController.chatList);
chatRouter.get('/room/:id', chatController.chatRoom);

export default chatRouter;
