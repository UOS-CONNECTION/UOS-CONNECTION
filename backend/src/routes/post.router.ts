import postController from '@src/controllers/post.controller';
import { Request, Response, Router } from 'express';

const postRouter = Router();

postRouter.get('/:id', postController.temp);

export default postRouter;
