import { Column, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

import ChatEntity from './chat.entity';

class ChatMessageEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column('text', { nullable: false })
  content: string;

  @ManyToOne(() => ChatEntity, (chat) => chat._id)
  chatRoom: ChatEntity;

  @Column('timestamp', { nullable: false })
  created_at: Timestamp;
}

export default ChatMessageEntity;
