import { Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Socket } from 'socket.io-client';

import ChatPerson from './ChatPerson';
import {
  ChatType,
  ServerToClientEvents,
  ClientToServerEvents,
} from '../../Util/Type';

interface IChatSelect {
  setChatRoom: Dispatch<SetStateAction<number>>;
  chatList: ChatType[];
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

const ChatList: React.FC<IChatSelect> = ({ setChatRoom, chatList, socket }) => {
  return (
    <Box className='chat-list-container'>
      <Box className='chat-list-top'>
        <Typography color='inherit' className='chat-list-header'>
          대화목록
        </Typography>
      </Box>
      <Box className='chat-list'>
        {chatList.map((item, idx) => (
          <ChatPerson
            key={idx}
            item={item}
            idx={idx}
            setChatRoom={setChatRoom}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ChatList;
