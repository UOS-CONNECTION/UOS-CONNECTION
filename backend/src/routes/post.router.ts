import postController from '@src/controllers/post.controller';
import { Request, Response, Router } from 'express';

const postRouter = Router();

postRouter.get('/:postId', postController.temp);
postRouter.get('/', postController.getAllPost);

export default postRouter;
