import PostController from '@src/controllers/post.controller';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/:postId', PostController.getOnePost);
postRouter.get('', PostController.getPaginationPost);
postRouter.post('/', PostController.savePost);

export default postRouter;
