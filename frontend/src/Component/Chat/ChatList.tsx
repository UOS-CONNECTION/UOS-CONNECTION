import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TempChat } from '../../Util/TempData';
import { Dispatch, SetStateAction } from 'react';
import ChatPerson from './ChatPerson';

interface IchatSelect {
  setChatroom: Dispatch<SetStateAction<number>>;
}

const ChatList: React.FC<IchatSelect> = ({ setChatroom }) => {
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
          <ChatPerson
            key={idx}
            item={item}
            idx={idx}
            setChatroom={setChatroom}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ChatList;
