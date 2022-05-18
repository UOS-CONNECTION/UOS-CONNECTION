// type orm user
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @Column('text', { nullable: true })
  category: string;

  @ManyToOne(() => UserEntity, (user) => user._id)
  user_id: number;

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

export default Post;
