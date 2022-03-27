import { Box } from '@mui/material';
import { useState, useLayoutEffect } from 'react';

import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import { ChatType } from '../../Util/Type';
import requestAPI from '../../Util/Request';
import { LOADING } from '../../Util/Constant';

const Chat: React.FC = () => {
  const [chatRoom, setChatRoom] = useState<number>(0);
  const [chatList, setChatList] = useState<ChatType[]>([] as ChatType[]);
  const [chatData, setChatData] = useState<ChatType>({} as ChatType);
  const [loading, setLoading] = useState<boolean[]>([true, true]);

  useLayoutEffect(() => {
    requestAPI
      .get(`/api/chat/room/${chatRoom}`)
      .then((res) => setChatData(res.data[0]))
      .then(() => setLoading((prev) => [prev[LOADING.LIST], false]));
  }, [chatRoom]);

  useLayoutEffect(() => {
    requestAPI
      .get('/api/chat/list')
      .then((res) => setChatList(res.data))
      .then(() => setLoading((prev) => [false, prev[LOADING.DETAIL]]));
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
