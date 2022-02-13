import { Box } from '@mui/material';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';

const Chat: React.FC = () => {
  return (
    <Box className='chat-container'>
      <ChatList />
      <ChatDetail />
    </Box>
  );
};

export default Chat;
