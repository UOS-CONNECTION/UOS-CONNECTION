import { Box, Typography, Card, Avatar, CardContent } from '@mui/material';

type ChatCardProps = {
  message: string;
  isFirst: boolean;
  isLeft: boolean;
};

const ChatCard: React.FC<ChatCardProps> = ({ message, isFirst, isLeft }) => {
  // const isfirstYellow: boolean = item[1] === 1;

  return (
    <Box className={isLeft ? 'chat-left' : 'chat-right'}>
      <Card elevation={0} className={isLeft ? 'chat-yellow' : 'chat-gray'}>
        <Avatar
          className={isLeft && isFirst ? 'userimg-orange' : 'userimg-hidden'}
        >
          J
        </Avatar>
        <CardContent
          className={isLeft ? 'chat-detail-left' : 'chat-detail-right'}
        >
          <Typography className='chat-content'>{message}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChatCard;
