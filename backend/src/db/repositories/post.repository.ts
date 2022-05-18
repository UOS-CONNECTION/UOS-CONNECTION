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

  async getSomePost(offset?: number, limit?: number) {
    return await this.find({
      relations: ['user_id'],
      order: {
        created_at: 'DESC',
      },
      skip: offset,
      take: limit,
    });
  }
}

export default PostRepository;
