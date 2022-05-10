import { TempData } from '@src/utils/temp.data';
import { Request, Response } from 'express';

import PostRepository from '@src/db/repositories/post.repository';
import { getCustomRepository } from 'typeorm';

class postController {
  // example user
  async getOnePost(req: Request, res: Response) {
    try {
      const { postId } = req.params;
      const PostRepo = getCustomRepository(PostRepository);
      const SearchRes = await PostRepo.findById(parseInt(postId));

      return res.json(SearchRes);
    } catch (err) {
      res.sendStatus(400);
    }
  }

  async getAllPost(req: Request, res: Response) {
    try {
      console.log('send All Data');
      return res.json(TempData);
    } catch (err) {
      res.sendStatus(400);
    }
  }
}

export default new postController();
