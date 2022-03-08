import { Box, Typography, Card, TextField, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatType } from '../../Util/Type';
import ChatCard from './ChatCard';
import { useState, useEffect, useLayoutEffect } from 'react';
import React from 'react';

interface ChatroomProps {
  chatData: ChatType;
  socket: any;
}

interface ChatContent {
  message: string;
  sender_nickname: string;
}

const initialRecentChat = {
  message: '',
  sender_nickname: '',
};

const ChatDetail: React.FC<ChatroomProps> = ({ chatData, socket }) => {
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
      socket.emit('message', {
        message: inputMessage,
        sender_nickname: myName,
      });
      setInputMessage('');
    }
  };

  const handleBtnClick = () => {
    socket.emit('message', { message: inputMessage, sender_nickname: myName });
    setInputMessage('');
  };

  const recallPastChat = () => {
    const pastChat: ChatContent[] = [initialRecentChat];
    chatData?.content?.map((item, idx) => {
      pastChat.push({
        message: item[0],
        sender_nickname: item[1],
      });
      if (
        idx > 0 &&
        pastChat[idx + 1]['sender_nickname'] !==
          pastChat[idx]['sender_nickname']
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
      console.log(data);
      setRecentChat(data);
    });
  }, []);

  useEffect(() => {
    if (recentChat?.message?.length > 0) {
      recentChat?.sender_nickname !==
        chatMonitor[chatMonitor.length - 1]['sender_nickname'] &&
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
          if (item.sender_nickname !== myName && firstArr.includes(idx)) {
            return (
              <ChatCard
                message={item.message}
                isFirst={true}
                color='yellow'
                Key={idx}
              />
            ); // first Yellow & yellow or gray
          } else if (
            item.sender_nickname !== myName &&
            !firstArr.includes(idx)
          ) {
            return (
              <ChatCard
                message={item.message}
                isFirst={false}
                color='yellow'
                Key={idx}
              />
            );
          } else {
            return (
              <ChatCard
                message={item.message}
                isFirst={false}
                color='gray'
                Key={idx}
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
