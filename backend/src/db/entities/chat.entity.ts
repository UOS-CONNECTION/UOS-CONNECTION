// type orm user
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

import PostEntity from './post.entity';
import UserEntity from './user.entity';

@Entity()
class Chat {
  @PrimaryGeneratedColumn()
  _id!: number;

  @OneToOne(() => UserEntity, (user) => user._id)
  user_id1: number;

  @OneToOne(() => UserEntity, (user) => user._id)
  user_id2: number;

  @OneToMany(() => PostEntity, (post) => post._id)
  post_id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;
}

export default Chat;
