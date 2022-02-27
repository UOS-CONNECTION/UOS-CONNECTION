import { Box, Typography, Card, TextField, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatType } from '../../Util/Type';
import ChatCard from './ChatCard';

interface ChatroomProps {
  chatData: ChatType;
}

const ChatDetail: React.FC<ChatroomProps> = ({ chatData }) => {
  // const [chatPerson, setChatPerson] = useState<number>(2); //id

  return (
    <Box className='chat-detail-container'>
      <Card className='chat-detail-top' elevation={0}>
        <Avatar alt='user-img' src={''}></Avatar>
        <Typography className='chat-detail-usernickname'>
          {chatData.User?.nickname}
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
