import { Box } from '@mui/material';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import { useState, useLayoutEffect } from 'react';
import { ChatType } from '../../Util/Type';
import { io } from 'socket.io-client';

const initialChatlist: ChatType[] = [
  {
    id: '',
    User: {
      id: '',
      img: '',
      nickname: '',
    },
    unwatched: 0,
    last: '',
    overview: '',
  },
];

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

const socket = io('http://localhost:8080/', {
  transports: ['websocket'],
  upgrade: false,
  forceNew: true,
});
socket.emit('message', 'Hello, Im from client!');
console.log(socket.connected);

const Chat: React.FC = () => {
  const [chatRoom, setChatroom] = useState<number>(0);
  const [chatlist, setChatlist] = useState<ChatType[]>(initialChatlist);
  const [chatData, setChatData] = useState<ChatType>(initialChat);

  useLayoutEffect(() => {
    fetch(`http://localhost:8080/api/chat/room/${chatRoom}`)
      .then((res) => res.json())
      .then((data) => setChatData(data[0]));
  }, [chatRoom]);

  useLayoutEffect(() => {
    fetch('http://localhost:8080/api/chat/list')
      .then((res) => res.json())
      .then((data) => setChatlist(data));
  }, []);

  return (
    <Box className='chat-main-container'>
      <ChatList setChatroom={setChatroom} chatlist={chatlist} socket={socket} />
      <ChatDetail chatData={chatData} socket={socket} />
    </Box>
  );
};

export default Chat;
