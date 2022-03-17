import { Box, Typography, Skeleton, Card } from '@mui/material';
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
  isLoading: boolean;
}

const ChatList: React.FC<IChatSelect> = ({
  setChatRoom,
  chatList,
  socket,
  isLoading,
}) => {
  return (
    <Box className='chat-list-container'>
      <Box className='chat-list-top'>
        {isLoading ? (
          <Skeleton
            variant='text'
            animation='wave'
            width='50%'
            height='70%'
            className='chat-list-header'
          />
        ) : (
          <Typography color='inherit' className='chat-list-header'>
            대화목록
          </Typography>
        )}
      </Box>
      <Box className='chat-list'>
        {isLoading ? (
          <>
            <Card elevation={0}>
              <Skeleton variant='circular' width={50} height={50} />
            </Card>
          </>
        ) : (
          chatList.map((item, idx) => (
            <ChatPerson
              key={idx}
              item={item}
              idx={idx}
              setChatRoom={setChatRoom}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default ChatList;
