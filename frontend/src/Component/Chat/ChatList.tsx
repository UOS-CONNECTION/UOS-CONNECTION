import { Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import ChatPerson from './ChatPerson';
import { ChatType } from '../../Util/Type';
import { ChatListHeaderSkeleton, ChatPersonSkeleton } from './ChatSkeleton';

interface IChatSelect {
  setChatRoom: Dispatch<SetStateAction<number>>;
  chatList: ChatType[];
  isLoading: boolean;
}

const skeletonChat = [0, 0, 0, 0, 0];

const ChatList: React.FC<IChatSelect> = ({
  setChatRoom,
  chatList,
  isLoading,
}) => {
  return (
    <Box className='chat-list-container'>
      <Box className='chat-list-top'>
        {isLoading ? (
          <ChatListHeaderSkeleton />
        ) : (
          <Typography color='inherit' className='chat-list-header'>
            대화목록
          </Typography>
        )}
      </Box>
      <Box className='chat-list'>
        {isLoading
          ? skeletonChat.map((item, idx) => <ChatPersonSkeleton key={idx} />)
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
