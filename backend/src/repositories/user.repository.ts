// typeorm
import { EntityRepository, Repository } from "typeorm";
import UserEntity from "../entities/user.entity";

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  // typeorm
  // findById(id: number) {
  //
  // }

  // findByEmail
  findByEmail(email: string) {
    return this.findOne({ email });
  }
}

export default UserRepository;
