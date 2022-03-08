import { Box, Typography, Card, Avatar, CardContent } from '@mui/material';

type ChatcardProps = {
  message: string;
  isFirst: boolean;
  color: string;
  Key: number;
};

const ChatCard: React.FC<ChatcardProps> = ({
  message,
  isFirst,
  color,
  Key,
}) => {
  // const isfirstYellow: boolean = item[1] === 1;
  const isYellow: boolean = color === 'yellow';

  return (
    <Box key={Key} className={isYellow ? 'chat-left' : 'chat-right'}>
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
