import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import PostRepository from '@src/db/repositories/post.repository';
import PostEntity from '@src/db/entities/post.entity';

class PostController {
  // example user
  async getOnePost(req: Request, res: Response) {
    try {
      const { postId } = req.params;
      const postRepo = getCustomRepository(PostRepository);
      const searchRes = await postRepo.findById(parseInt(postId, 10));
      if (searchRes.content === '')
        return res.json({ status: 'error', error: 'empty post' });

      return res.json({ status: 'success', data: searchRes });
    } catch (err) {
      res.sendStatus(400);
    }
    return null;
  }

  async getPaginationPost(req: Request, res: Response) {
    try {
      const { offset } = req.query;
      const { limit } = req.query;
      const postRepo = getCustomRepository(PostRepository);

      if (!limit || !offset)
        return res.json({ status: 'error', error: 'empty params' });
      if (typeof offset !== 'string' || typeof limit !== 'string')
        return res.json({ status: 'error', error: 'wrong param types' });

      const maxSize = await postRepo.getMaxSize();
      if (parseInt(offset as string, 10) >= maxSize)
        return res.json({ status: 'err', err: 'out of range' });

      const searchRes = await postRepo.getSomePost(
        maxSize,
        parseInt(offset as string, 10),
        parseInt(limit as string, 10),
      );

      return res.json({ status: 'success', data: searchRes });
    } catch (err) {
      res.sendStatus(400);
    }
    return null;
  }

  async savePost(req: Request, res: Response) {
    const { title, content, image, category, userId } = req.body;
    const postRepository = getCustomRepository(PostRepository);

    const post = new PostEntity();
    post.title = title;
    post.img = image;
    post.content = content;
    post.category = category;
    post.user_id = userId;

    postRepository.save(post);
    return res.status(200).send('포스트 저장에 성공했습니다.');
  }
}

export default new PostController();
