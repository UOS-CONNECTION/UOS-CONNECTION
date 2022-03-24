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
import { LOADING } from '../../Util/Constant';

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

  const fetchChatRoom = async () => {
    const res = await requestAPI.get(`/api/chat/room/${chatRoom}`);
    setChatData(res.data[0]);
    setLoading((prev) => [prev[LOADING.LIST], false]);
  };

  const fetchChatList = async () => {
    const res = await requestAPI.get('/api/chat/list');
    setChatList(res.data);
    setLoading((prev) => [false, prev[LOADING.DETAIL]]);
  };

  useLayoutEffect(() => {
    fetchChatRoom();
  }, [chatRoom]);

  useLayoutEffect(() => {
    fetchChatList();
  }, []);

  return (
    <Box className='chat-main-container'>
      <ChatList
        setChatRoom={setChatRoom}
        chatList={chatList}
        socket={socket}
        isLoading={loading[LOADING.LIST]}
      />
      <ChatDetail
        chatData={chatData}
        socket={socket}
        isLoading={loading[LOADING.DETAIL]}
      />
    </Box>
  );
};

export default Chat;
