import { Box, Typography, Card, Avatar, CardContent } from '@mui/material';

type ChatcardProps = {
  item: (string | number)[];
  idx: number;
};

const ChatCard: React.FC<ChatcardProps> = ({ item, idx }) => {
  const isfirstYellow: boolean = item[1] === 1;
  const isYellow: boolean = item[1] > 0;

  return (
    <Box key={idx} className={isYellow ? 'chat-left' : 'chat-right'}>
      <Card elevation={0} className={isYellow ? 'chat-yellow' : 'chat-gray'}>
        <Avatar className={isfirstYellow ? 'userimg-orange' : 'userimg-hidden'}>
          J
        </Avatar>
        <CardContent
          className={item[1] > 0 ? 'chat-detail-left' : 'chat-detail-right'}
        >
          <Typography className='chat-content'>{item[0]}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChatCard;
