import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

import ChatEntity from './chat.entity';

@Entity()
class ChatMessage {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column('text', { nullable: true })
  content: string;

  @Column('bool', { nullable: true })
  watched: boolean;

  @ManyToOne(() => ChatEntity, (chat) => chat._id)
  chat_room_id: ChatEntity;

  @Column('timestamp', { nullable: true })
  created_at: Timestamp;
}

export default ChatMessage;
