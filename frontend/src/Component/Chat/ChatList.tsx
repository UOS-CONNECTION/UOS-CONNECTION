import { Box, Typography, Skeleton, Card, CardContent } from '@mui/material';
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

const skeletonChat = [0, 0, 0, 0, 0];

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
            className='chat-list-header-skeleton'
          />
        ) : (
          <Typography color='inherit' className='chat-list-header'>
            대화목록
          </Typography>
        )}
      </Box>
      <Box className='chat-list'>
        {isLoading
          ? skeletonChat.map((item, idx) => (
              <Card elevation={0} key={idx} className='chat'>
                <Skeleton
                  variant='circular'
                  animation='wave'
                  className='user-img-skeleton'
                />
                <CardContent className='chat-list-mid'>
                  <Skeleton
                    variant='text'
                    animation='wave'
                    className='nickname-skeleton'
                  />
                  <Skeleton variant='text' animation='wave' />
                </CardContent>
              </Card>
            ))
          : chatList.map((item, idx) => (
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
