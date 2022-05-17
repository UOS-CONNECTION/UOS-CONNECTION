import { EntityRepository, Repository } from 'typeorm';

import PostEntity from '@src/db/entities/post.entity';

@EntityRepository(PostEntity)
class PostRepository extends Repository<PostEntity> {
  async findById(_id: number) {
    return this.findOne({ _id }, { relations: ['user_id'] });
  }

  async getMaxSize() {
    return this.createQueryBuilder('post').select('(*)').getCount();
  }

  async getSomePost(maxSize: number, offset: number, limit: number) {
    return this.createQueryBuilder('post')
      .orderBy('created_at', 'DESC')
      .offset(offset)
      .limit(limit)
      .getMany();
  }
}

export default PostRepository;
