import postController from '@src/controllers/post.controller';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/:postId', postController.getOnePost);
postRouter.get('', postController.getPaginationPost);

export default postRouter;
