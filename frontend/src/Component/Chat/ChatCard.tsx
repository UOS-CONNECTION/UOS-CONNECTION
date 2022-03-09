import { Box, Typography, Card, Avatar, CardContent } from '@mui/material';

type ChatCardProps = {
  message: string;
  isFirst: boolean;
  color: string;
};

const ChatCard: React.FC<ChatCardProps> = ({ message, isFirst, color }) => {
  // const isfirstYellow: boolean = item[1] === 1;
  const isYellow: boolean = color === 'yellow';

  return (
    <Box className={isYellow ? 'chat-left' : 'chat-right'}>
      <Card elevation={0} className={isYellow ? 'chat-yellow' : 'chat-gray'}>
        <Avatar
          className={isYellow && isFirst ? 'userimg-orange' : 'userimg-hidden'}
        >
          J
        </Avatar>
        <CardContent
          className={isYellow ? 'chat-detail-left' : 'chat-detail-right'}
        >
          <Typography className='chat-content'>{message}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChatCard;
