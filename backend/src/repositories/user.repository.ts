import { EntityRepository, Repository } from 'typeorm';

import UserEntity from '@src/entities/user.entity';

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  findById(_id: number) {
    return this.findOne({ _id });
  }

  findByEmail(email: string) {
    return this.findOne({ email });
  }
}

export default UserRepository;
