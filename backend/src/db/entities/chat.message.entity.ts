import { Column, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

import ChatEntity from './chat.entity';

class ChatMessageEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column('text', { nullable: true })
  content: string;

  @ManyToOne(() => ChatEntity, (chat) => chat._id)
  chat_room_id: ChatEntity;

  @Column('timestamp', { nullable: true })
  created_at: Timestamp;
}

export default ChatMessageEntity;
