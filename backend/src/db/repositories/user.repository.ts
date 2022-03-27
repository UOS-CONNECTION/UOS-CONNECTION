import { EntityRepository, Repository } from 'typeorm';

import UserEntity from '@src/db/entities/user.entity';

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  findById(_id: number) {
    return this.findOne({ _id });
  }

  async findByEmail(email: string) {
    return await this.createQueryBuilder('user')
      .where({ email })
      .select()
      .getOne();
  }
}

export default UserRepository;
