import { Box, Skeleton, Card, CardContent } from '@mui/material';

export const ChatListHeaderSkeleton = () => (
  <Skeleton
    variant='text'
    animation='wave'
    className='chat-list-header-skeleton'
  />
);

export const ChatPersonSkeleton = () => (
  <Card elevation={0} className='chat'>
    <Skeleton
      variant='circular'
      animation='wave'
      className='user-img-skeleton'
    />
    <CardContent className='chat-list-mid'>
      <Skeleton variant='text' animation='wave' className='nickname-skeleton' />
      <Skeleton variant='text' animation='wave' />
    </CardContent>
  </Card>
);

export const ChatDetailTopSkeleton = () => (
  <Card className='chat-detail-top' elevation={0}>
    <Skeleton
      variant='circular'
      animation='wave'
      className='user-img-skeleton'
    />
    <Skeleton
      variant='text'
      animation='wave'
      className='usernickname-skeleton'
    />
  </Card>
);

export const ChatMsgSkeletonContainer = () => (
  <>
    <ChatMsgSkeleton />
    <ChatMsgReverseSkeleton />
    <ChatMsgSkeleton />
    <ChatMsgReverseSkeleton />
  </>
);

const ChatMsgSkeleton = () => (
  <Box className='chat-msg-skeleton'>
    <Skeleton
      variant='circular'
      animation='wave'
      className='msg-user-img-skeleton'
    />
    <Skeleton variant='text' animation='wave' className='msg-text-skeleton' />
  </Box>
);

const ChatMsgReverseSkeleton = () => (
  <Box className='chat-msg-skeleton-reverse'>
    <Skeleton variant='text' animation='wave' className='msg-text-skeleton' />
  </Box>
);
