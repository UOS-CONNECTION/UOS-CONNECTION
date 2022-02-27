import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Dispatch, SetStateAction } from 'react';
import ChatPerson from './ChatPerson';
import { ChatType } from '../../Util/Type';

interface IchatSelect {
  setChatroom: Dispatch<SetStateAction<number>>;
  chatlist: ChatType[];
}

const ChatList: React.FC<IchatSelect> = ({ setChatroom, chatlist }) => {
  return (
    <Box className='chat-list-container'>
      <Box className='chat-list-top'>
        <Typography color='inherit' className='chat-list-header'>
          대화목록
        </Typography>
        <SearchIcon className='search-icon'></SearchIcon>
      </Box>
      <Box className='chat-list'>
        {chatlist.map((item, idx) => (
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
