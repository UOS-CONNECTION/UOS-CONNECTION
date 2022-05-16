import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { dateConvert } from '../../Util/dateConvert';
import { summary } from '../../Util/summary';
import { ChatType } from '../../Types/Type';

interface ChatPersonProps {
  item: ChatType;
  idx: number;
  setChatRoom: Dispatch<SetStateAction<number>>;
}

const unwatchedExist = (_item: ChatType): boolean => _item.unwatched !== 0;

const ChatPerson: React.FC<ChatPersonProps> = ({
  item,
  idx,
  setChatRoom,
}: ChatPersonProps) => {
  return (
    <Card
      className='chat'
      elevation={0}
      key={idx}
      onClick={() => {
        setChatRoom(idx);
      }}
    >
      <CardMedia
        component='img'
        className='chat-list-userimg'
        alt=''
        image=''
      />
      <CardContent className='chat-list-mid'>
        <Typography className='chat-list-nickname'>
          {item.User.nickname}
        </Typography>
        <Typography className='chat-list-overview'>
          {summary(item?.overview)}
        </Typography>
      </CardContent>
      <CardContent className='chat-list-right'>
        <Typography className='chat-list-lastsaw'>
          {dateConvert(item.last)}
        </Typography>
        {unwatchedExist(item) && (
          <Box className='unwatched-circle'>
            <Typography className='chat-list-unwatched'>
              {item.unwatched}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatPerson;
