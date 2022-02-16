import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TempChat } from '../../Util/TempData';
import { DateConvert } from '../../Util/DateConvert';
import { Summary } from '../../Util/Summary';
import { ChatType } from '../../Util/Type';
import { Dispatch, SetStateAction } from 'react';

interface IchatSelect {
  setChatroom: Dispatch<SetStateAction<number>>;
}

const ChatList: React.FC<IchatSelect> = ({ setChatroom }) => {
  const unwatchedExist = (_item: ChatType): boolean => _item.unwatched !== 0;

  return (
    <Box className='chat-list-container'>
      <Box className='chat-list-top'>
        <Typography color='inherit' className='chat-list-header'>
          대화목록
        </Typography>
        <SearchIcon className='search-icon'></SearchIcon>
      </Box>
      <Box className='chat-list'>
        {TempChat.map((item, idx) => (
          <Card
            className='chat'
            elevation={0}
            key={idx}
            onClick={() => setChatroom(idx)}
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
                {Summary(item.overview)}
              </Typography>
            </CardContent>
            <CardContent className='chat-list-right'>
              <Typography className='chat-list-lastsaw'>
                {DateConvert(item.last)}
              </Typography>
              {unwatchedExist(item) ? (
                <Box className='unwatched-circle'>
                  <Typography className='chat-list-unwatched'>
                    {item.unwatched}
                  </Typography>
                </Box>
              ) : (
                ' '
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ChatList;
