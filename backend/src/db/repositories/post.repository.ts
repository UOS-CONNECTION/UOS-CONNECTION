import { EntityRepository, Repository } from 'typeorm';

import PostEntity from '@src/db/entities/post.entity';

@EntityRepository(PostEntity)
class PostRepository extends Repository<PostEntity> {
  async findById(_id: number) {
    return this.createQueryBuilder('post')
      .select(['post', 'post.user_id', 'user._id', 'user.nickname', 'user.img'])
      .leftJoin('post.user_id', 'user')
      .where('post._id = :id', { id: _id })
      .getOne();
  }

  async getMaxSize() {
    return this.createQueryBuilder('post').select('(*)').getCount();
  }

  async getSomePost(maxSize: number, offset: number, limit: number) {
    let startPoint = maxSize - (offset + limit);
    let limitConvert = limit;
    if (startPoint < 0) {
      limitConvert += startPoint;
      startPoint = 0;
    }

    return this.createQueryBuilder('post')
      .select(['post', 'post.user_id', 'user._id', 'user.nickname', 'user.img'])
      .leftJoin('post.user_id', 'user')
      .skip(startPoint)
      .take(limitConvert)
      .getMany();
  }
}

export default PostRepository;
