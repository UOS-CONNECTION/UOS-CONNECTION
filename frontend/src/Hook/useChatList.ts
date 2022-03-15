import { useState, useCallback } from 'react';

import { ChatType } from '../Util/Type';

interface ChatContent {
  message: string;
  isLeft: boolean;
  isFirstChat: boolean;
}

interface ChatFromServer {
  message: string;
  senderName: string;
}

const useChatList = () => {
  const [chatList, setChatList] = useState<ChatContent[]>([]);
  const [isFirstChat, setIsFirstChat] = useState<boolean>(true);

  const updateFirstChat = (
    isFirstChat: boolean,
    myName: string,
    senderName: string
  ) => {
    if (senderName === myName) setIsFirstChat(true);
    else if (isFirstChat) setIsFirstChat(false);
  };

  const addChat = useCallback(
    async (recentChatMessage: ChatFromServer, myName: string) => {
      const newChat = {
        message: recentChatMessage.message,
        isLeft: recentChatMessage.senderName !== myName,
        isFirstChat: recentChatMessage.senderName !== myName && isFirstChat,
      };
      updateFirstChat(isFirstChat, myName, recentChatMessage.senderName);
      setChatList((prev) => [...prev, newChat]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chatList]
  );

  const setPastChat = useCallback(
    async (chatData: ChatType, myName: string) => {
      const pastChat: ChatContent[] = chatData!.content!.map((item) => {
        const singlePastChat = {
          message: item[0],
          isLeft: item[1] !== myName,
          isFirstChat: item[1] !== myName && isFirstChat,
        };
        updateFirstChat(isFirstChat, myName, item[1]);
        return singlePastChat;
      });
      setChatList(pastChat);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { chatList, addChat, setPastChat };
};

export default useChatList;
