import chatController from '@src/controllers/chat.controller';
import { Router } from 'express';

const chatRouter = Router();

chatRouter.get('/list', chatController.getChatList);
chatRouter.get('/room/:id', chatController.getChatRoomDetail);

export default chatRouter;
