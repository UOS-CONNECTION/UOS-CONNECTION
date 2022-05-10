import { EntityRepository, Repository } from 'typeorm';

import PostEntity from '@src/db/entities/post.entity';

@EntityRepository(PostEntity)
class PostRepository extends Repository<PostEntity> {
	async findById(_id: number) {
		return this.findOne({ _id });
	}
}

export default PostRepository;
