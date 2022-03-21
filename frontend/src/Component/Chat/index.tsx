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
import { DETAIL, LIST } from '../../Util/Constant';

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

const Chat: React.FC = () => {
  const [chatRoom, setChatRoom] = useState<number>(0);
  const [chatList, setChatList] = useState<ChatType[]>(initialChatList);
  const [chatData, setChatData] = useState<ChatType>(initialChat);
  const [loading, setLoading] = useState<boolean[]>([true, true]);

  useLayoutEffect(() => {
    requestAPI
      .get(`/api/chat/room/${chatRoom}`)
      .then((res) => setChatData(res.data[0]))
      .then(() => setLoading((prev) => [prev[LIST], false]));
  }, [chatRoom]);

  useLayoutEffect(() => {
    requestAPI
      .get('/api/chat/list')
      .then((res) => setChatList(res.data))
      .then(() => setLoading((prev) => [false, prev[DETAIL]]));
  }, []);

  return (
    <Box className='chat-main-container'>
      <ChatList
        setChatRoom={setChatRoom}
        chatList={chatList}
        socket={socket}
        isLoading={loading[LIST]}
      />
      <ChatDetail
        chatData={chatData}
        socket={socket}
        isLoading={loading[DETAIL]}
      />
    </Box>
  );
};

export default Chat;
