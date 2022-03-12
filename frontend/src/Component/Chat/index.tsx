import { Box } from '@mui/material';
import { io, Socket } from 'socket.io-client';
import { useState, useLayoutEffect } from 'react';

import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import {
  ChatType,
  ServerToClientEvents,
  ClientToServerEvents,
} from '../../Util/Type';
import requestAPI from '../../Util/Request';

const initialChat: ChatType = {
  id: '',
  User: {
    id: '',
    img: '',
    nickname: '',
  },
  unwatched: 0,
  last: '',
  overview: '',
};
const initialChatList: ChatType[] = [initialChat];

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'http://localhost:8080/',
  {
    transports: ['websocket'],
    upgrade: false,
    forceNew: true,
  }
);
socket.send('Hello, Im from client!');
console.log(socket.connected);

const Chat: React.FC = () => {
  const [chatRoom, setChatRoom] = useState<number>(0);
  const [chatList, setChatList] = useState<ChatType[]>(initialChatList);
  const [chatData, setChatData] = useState<ChatType>(initialChat);

  useLayoutEffect(() => {
    requestAPI
      .get(`/api/chat/room/${chatRoom}`)
      .then((res) => setChatData(res.data[0]));
  }, [chatRoom]);

  useLayoutEffect(() => {
    requestAPI.get('/api/chat/list').then((res) => setChatList(res.data));
  }, []);

  return (
    <Box className='chat-main-container'>
      <ChatList setChatRoom={setChatRoom} chatList={chatList} socket={socket} />
      <ChatDetail chatData={chatData} socket={socket} />
    </Box>
  );
};

export default Chat;
