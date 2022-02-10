import { Box, Typography, Card, CardContent, TextField } from '@mui/material';
import { useState } from 'react';
import { TempChat } from '../../Util/TempChat';
import SendIcon from '@mui/icons-material/Send';
import { ChatType } from '../../Util/ChatType';
import ChatCard from './ChatCard';

const ChatDetail: React.FC = () => {
  const [chatPerson, setChatPerson] = useState<number>(2); //id
  const [chatData, setChatData] = useState<ChatType>(TempChat[1]);

  return (
    <Box className='chatdetail-container'>
      <Card className='chatdetail-top' elevation={0}>
        <Box className='userimage-container'></Box>
        <CardContent>
          <Typography className='chatdetail-usernickname'>
            {chatData.User.nickname}
          </Typography>
        </CardContent>
      </Card>
      <Box className='chatdetail'>
        {chatData.content?.map((item, idx) => (
          <ChatCard item={item} idx={idx} />
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
