import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Box, Typography, Card, TextField, Avatar } from '@mui/material';

import ChatCard from './ChatCard';
import { ChatType } from '../../Util/Type';
import socketAPI from '../../Util/SocketAPI';
import useChatList from '../../Hook/useChatList';
import { BOTTOM_HEIGHT } from '../../Util/Constant';
import {
  ChatDetailTopSkeleton,
  ChatMsgSkeletonContainer,
} from './ChatSkeleton';

interface ChatRoomProps {
  chatData: ChatType;
  isLoading: boolean;
}

interface ChatContent {
  message: string;
  senderName: string;
}
const ChatDetail: React.FC<ChatRoomProps> = ({
  chatData,
  isLoading,
}: ChatRoomProps) => {
  const [myName] = useState<string>('keroro');
  const [inputMessage, setInputMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { chatList, addChat, setPastChat } = useChatList();
  const scrollRef = useRef<HTMLInputElement>(null);

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    setInputMessage(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      socketAPI.sendMessage({
        message: inputMessage,
        senderName: myName,
      });
      setInputMessage('');
    }
  };

  const handleBtnClick = () => {
    socketAPI.sendMessage({ message: inputMessage, senderName: myName });
    setInputMessage('');
  };

  const scrollToBottom = () => {
    scrollRef?.current?.scrollTo(0, BOTTOM_HEIGHT);
  };

  useLayoutEffect(() => {
    setPastChat(chatData, myName)
      .then(() => setLoading(false))
      .then(() => scrollToBottom());
  }, [chatData, myName, setPastChat]);

  useEffect(() => {
    const handler = (data: ChatContent) => {
      addChat(data, myName).then(() => {
        scrollToBottom();
      });
    };
    socketAPI.onEvent('upload', handler);
    return () => socketAPI.offEvent('upload', handler);
  }, [addChat, myName]);

  return (
    <Box className='chat-detail-container'>
      {isLoading ? (
        <ChatDetailTopSkeleton />
      ) : (
        <Card className='chat-detail-top' elevation={0}>
          <Avatar alt='user-img' src='' />
          <Typography className='chat-detail-usernickname'>
            {chatData.User?.nickname}
          </Typography>
        </Card>
      )}
      <Box className='chat-detail' ref={scrollRef}>
        {loading ? (
          <ChatMsgSkeletonContainer />
        ) : (
          chatList?.map(
            (item, idx) =>
              item?.message?.length > 0 && (
                <ChatCard
                  message={item.message}
                  isLeft={item.isLeft}
                  key={idx}
                />
              ),
          )
        )}
      </Box>
      <Box className='send-chat'>
        <TextField
          fullWidth
          id='filled-basic'
          variant='filled'
          className='chat-input'
          size='small'
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <SendIcon className='send-icon' onClick={handleBtnClick} />
            ),
          }}
          onChange={handleInput}
          onKeyPress={handleEnter}
          value={inputMessage}
        />
      </Box>
    </Box>
  );
};

export default ChatDetail;
