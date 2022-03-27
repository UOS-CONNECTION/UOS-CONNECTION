// type orm user
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

import UserEntity from './user.entity';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  content: string;

  @Column('text', { nullable: true })
  img: string;

  @Column('text', { nullable: true })
  label: string;

  @ManyToOne(() => UserEntity, (user) => user._id)
  user_id: number;

  @Column('timestamp', { nullable: true })
  updated_at: Timestamp;

  @Column('timestamp', { nullable: true })
  created_at: Timestamp;
}

export default Post;
