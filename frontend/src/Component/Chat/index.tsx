import { Box } from '@mui/material';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import { useState } from 'react';

const Chat: React.FC = () => {
  const [chatRoom, setChatroom] = useState<number>(0);
  return (
    <Box className='chat-main-container'>
      <ChatList setChatroom={setChatroom} />
      <ChatDetail chatRoom={chatRoom} />
    </Box>
  );
};

export default Chat;
