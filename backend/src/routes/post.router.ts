import postController from '@src/controllers/post.controller';
import { Request, Response, Router } from 'express';

const postRouter = Router();

postRouter.get('/:postId', postController.getOnePost);
postRouter.get('', postController.getLimitedPost);

export default postRouter;
