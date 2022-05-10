import { Box, TextField } from '@mui/material';

const PostWriteBox = () => {
  return (
    <Box className='post-wirte-box'>
      <TextField
        id='post-write-title'
        variant='outlined'
        size='small'
        placeholder='타이틀'
      />
      <TextField
        id='post-write-content'
        variant='outlined'
        placeholder='내용'
        multiline
        minRows={10}
        maxRows={10}
      />
    </Box>
  );
};

export default PostWriteBox;
