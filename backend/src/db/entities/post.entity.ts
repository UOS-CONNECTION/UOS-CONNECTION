// type orm user
import { Column, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

import UserEntity from './user.entity';

class PostEntity {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column('text', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column('text', { nullable: false })
  image: string;

  @Column('text', { nullable: false })
  label: string;

  @ManyToOne(() => UserEntity, (user) => user._id)
  user_id: number;

  @Column('timestamp', { nullable: false })
  updated_at: Timestamp;

  @Column('timestamp', { nullable: false })
  created_at: Timestamp;
}

export default PostEntity;
