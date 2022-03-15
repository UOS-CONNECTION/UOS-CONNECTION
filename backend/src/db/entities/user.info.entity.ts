// type orm user
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import UserEntity from './user.entity';

class UserInfoEntity {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column('text', { nullable: true })
  authentication: string;

  @Column('int', { nullable: true })
  share_cnt: string;

  @Column('text', { nullable: true })
  location: string;

  @Column('text', { nullable: true })
  contact_time: string;

  @OneToOne(() => UserEntity, (user) => user._id)
  user_id: UserEntity;
}

export default UserInfoEntity;
