import ChatController from '@src/controllers/chat.controller';
import { Router } from 'express';

const chatRouter = Router();

chatRouter.get('/list', ChatController.getChatList);
chatRouter.get('/room/:id', ChatController.getChatRoomDetail);

export default chatRouter;
