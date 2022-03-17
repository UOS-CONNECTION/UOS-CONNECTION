import { Box, Typography, Card, TextField, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import React from 'react';
import { Socket } from 'socket.io-client';

import {
  ChatType,
  ServerToClientEvents,
  ClientToServerEvents,
} from '../../Util/Type';
import ChatCard from './ChatCard';
import useChatList from '../../Hook/useChatList';

interface ChatRoomProps {
  chatData: ChatType;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

interface ChatContent {
  message: string;
  senderName: string;
}

const ChatDetail: React.FC<ChatRoomProps> = ({ chatData, socket }) => {
  const [myName, setMyName] = useState<string>('keroro');
  const [inputMessage, setInputMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { chatList, addChat, setPastChat } = useChatList();
  const scrollRef = useRef<HTMLInputElement>(null);

  //set user by login(w/redux) temp var = keroro

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setInputMessage(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      socket.send({
        message: inputMessage,
        senderName: myName,
      });
      setInputMessage('');
    }
  };

  const handleBtnClick = () => {
    socket.send({ message: inputMessage, senderName: myName });
    setInputMessage('');
  };

  const scrollToBottom = () => {
    scrollRef?.current?.scrollTo(0, 1000000);
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
    socket.on('upload', handler);
    return () => {
      socket.off('upload', handler);
    };
  }, [addChat, myName, socket]);

  return (
    <Box className='chat-detail-container'>
      <Card className='chat-detail-top' elevation={0}>
        <Avatar alt='user-img' src={''}></Avatar>
        <Typography className='chat-detail-usernickname'>
          {chatData.User?.nickname}
        </Typography>
      </Card>
      <Box className='chat-detail' ref={scrollRef}>
        {!loading &&
          chatList?.map(
            (item, idx) =>
              item?.message?.length > 0 && (
                <ChatCard
                  message={item.message}
                  isLeft={item.isLeft}
                  key={idx}
                />
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
