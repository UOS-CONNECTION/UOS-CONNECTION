// type orm user
import {
  Column,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

import ChatEntity from './chat.entity';
import UserInfoEntity from './user.info.entity';

class UserEntity {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column('text', { nullable: false })
  email!: string;

  @Column('text', { nullable: false })
  pwd!: string;

  @Column('text', { nullable: false })
  nickname!: string;

  @Column('text', { nullable: true })
  img: string;

  // 매너 점수
  @Column('int', { nullable: true })
  manner_score: number;

  // 자기자신 소개
  @Column('text', { nullable: true })
  self_desc: string;

  // 신고 당한 횟수
  @Column('int', { nullable: true })
  reported_cnt: number;

  @Column('text', { nullable: true })
  favorite_post: string;

  @OneToOne(() => UserInfoEntity, (user) => user._id)
  user_info_id: UserInfoEntity;

  @OneToMany(() => ChatEntity, (chatRoom) => chatRoom._id)
  chat_id: ChatEntity;

  @Column('timestamp', { nullable: false })
  updated_at: Timestamp;

  @Column('timestamp', { nullable: false })
  created_at: Timestamp;
}

export default UserEntity;
