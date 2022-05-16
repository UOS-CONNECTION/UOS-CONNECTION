import { Box } from '@mui/material';
import { useState, useLayoutEffect } from 'react';

import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import { ChatType } from '../../Types/Type';
import requestAPI from '../../Util/Request';
import { LOADING } from '../../Util/Constant';

const Chat: React.FC = () => {
  const [chatRoom, setChatRoom] = useState<number>(0);
  const [chatList, setChatList] = useState<ChatType[]>([] as ChatType[]);
  const [chatData, setChatData] = useState<ChatType>({} as ChatType);
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
        isLoading={loading[LOADING.LIST]}
      />
      <ChatDetail chatData={chatData} isLoading={loading[LOADING.DETAIL]} />
    </Box>
  );
};

export default Chat;
