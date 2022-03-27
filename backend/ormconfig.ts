import dotenv from 'dotenv';
dotenv.config();
import { ConnectionOptions } from 'typeorm';

import User from '@src/db/entities/user.entity';
import Chat from '@src/db/entities/chat.entity';
import Post from '@src/db/entities/post.entity';
import UserInfo from '@src/db/entities/user.info.entity';
import ChatMessage from '@src/db/entities/chat.message.entity';

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASENAME,
  synchronize: true,
  logging: false,
  entities: [User, Chat, Post, UserInfo, ChatMessage],
};

export default ormconfig;
