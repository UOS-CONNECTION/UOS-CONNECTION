// type orm user
import { Column, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

import ChatMessageEntity from './chat.message.entity';
import UserEntity from './user.entity';

class ChatEntity {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column('int', { nullable: true })
  unwatched: number;

  @OneToMany(() => UserEntity, (user) => user._id)
  user_id: number;

  @OneToMany(() => ChatMessageEntity, (chatMessage) => chatMessage._id)
  chat_id: number;

  @Column('timestamp', { nullable: false })
  updated_at: Timestamp;

  @Column('timestamp', { nullable: false })
  created_at: Timestamp;
}

export default ChatEntity;
