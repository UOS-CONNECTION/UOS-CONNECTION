import PostController from '@src/controllers/post.controller';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/:postId', PostController.getOnePost);
postRouter.get('', PostController.getPaginationPost);

export default postRouter;
