import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Avatar,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { TempChat } from '../../Util/TempData';
import SendIcon from '@mui/icons-material/Send';
import { ChatType } from '../../Util/Type';
import ChatCard from './ChatCard';

interface ChatroomProps {
  chatRoom: number;
}

const ChatDetail: React.FC<ChatroomProps> = ({ chatRoom }) => {
  // const [chatPerson, setChatPerson] = useState<number>(2); //id
  const [chatData, setChatData] = useState<ChatType>(TempChat[0]);

  useEffect(() => {
    setChatData(TempChat[chatRoom]);
  }, [chatRoom]);

  return (
    <Box className='chat-detail-container'>
      <Card className='chat-detail-top' elevation={0}>
        {/* <Box className='userimage-container'></Box> */}
        <Avatar alt='user-img' src={chatData.User.img}></Avatar>
        <Typography className='chat-detail-usernickname'>
          {chatData.User.nickname}
        </Typography>
      </Card>
      <Box className='chat-detail'>
        {chatData.content?.map((item, idx) => (
          <ChatCard item={item} idx={idx} key={idx} />
        ))}
      </Box>
      <Box className='send-chat'>
        <TextField
          fullWidth
          id='filled-basic'
          variant='filled'
          className='chat-input'
          size='small'
          InputProps={{
            disableUnderline: true,
            endAdornment: <SendIcon className='send-icon' />,
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatDetail;
