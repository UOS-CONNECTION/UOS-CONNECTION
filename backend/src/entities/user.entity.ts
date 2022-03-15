// type orm user

import { Column } from "typeorm";

class UserEntity {
  @Column()
  _id!: number;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default UserEntity;
