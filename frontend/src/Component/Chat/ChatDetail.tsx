import { Box, Typography, Card, TextField, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useLayoutEffect } from 'react';
import React from 'react';
import { Socket } from 'socket.io-client';

import {
  ChatType,
  ServerToClientEvents,
  ClientToServerEvents,
} from '../../Util/Type';
import ChatCard from './ChatCard';

interface ChatRoomProps {
  chatData: ChatType;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

interface ChatContent {
  message: string;
  senderName: string;
}

const initialRecentChat = {
  message: '',
  senderName: '',
};

const ChatDetail: React.FC<ChatRoomProps> = ({ chatData, socket }) => {
  const [myName, setMyName] = useState<string>('keroro');
  const [inputMessage, setInputMessage] = useState<string>('');
  const [chatMonitor, setChatMonitor] = useState<ChatContent[]>([]);
  const [recentChat, setRecentChat] = useState<ChatContent>(initialRecentChat);
  const [isFirstChat, setFirstChat] = useState<boolean>(true);
  const [firstArr, setFirstArr] = useState<number[]>([]);

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

  const recallPastChat = () => {
    const pastChat: ChatContent[] = [initialRecentChat];
    chatData?.content?.map((item, idx) => {
      pastChat.push({
        message: item[0],
        senderName: item[1],
      });
      if (
        idx > 0 &&
        pastChat[idx + 1]['senderName'] !== pastChat[idx]['senderName']
      )
        setFirstArr((prev) => [...prev, idx]);
    });
    setChatMonitor(pastChat);
  };

  useLayoutEffect(() => {
    recallPastChat();
  }, [chatData]);

  useEffect(() => {
    socket.on('upload', (data: ChatContent) => {
      setRecentChat(data);
    });
  }, []);

  useEffect(() => {
    if (recentChat?.message?.length > 0) {
      recentChat?.senderName !==
        chatMonitor[chatMonitor.length - 1]['senderName'] &&
        firstArr[firstArr.length - 1] !== chatMonitor.length &&
        setFirstArr([...firstArr, chatMonitor.length]);
      setChatMonitor([...chatMonitor, recentChat]);
    }
    setRecentChat(initialRecentChat);
  }, [recentChat]);

  return (
    <Box className='chat-detail-container'>
      <Card className='chat-detail-top' elevation={0}>
        <Avatar alt='user-img' src={''}></Avatar>
        <Typography className='chat-detail-usernickname'>
          {chatData.User?.nickname}
        </Typography>
      </Card>
      <Box className='chat-detail'>
        {chatMonitor.map((item, idx) => {
          if (item.message.length === 0) return;
          if (item.senderName !== myName && firstArr.includes(idx)) {
            return (
              <ChatCard
                message={item.message}
                isFirst={true}
                color='yellow'
                key={idx}
              />
            ); // first Yellow & yellow or gray
          } else if (item.senderName !== myName && !firstArr.includes(idx)) {
            return (
              <ChatCard
                message={item.message}
                isFirst={false}
                color='yellow'
                key={idx}
              />
            );
          } else {
            return (
              <ChatCard
                message={item.message}
                isFirst={false}
                color='gray'
                key={idx}
              />
            );
          }
        })}
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
