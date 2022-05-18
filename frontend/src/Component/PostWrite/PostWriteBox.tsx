import { Box, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { PostWriteValueType } from '.';

interface PostWriteBoxProps {
  setInputValue: Dispatch<SetStateAction<PostWriteValueType>>;
}

const PostWriteBox = ({ setInputValue }: PostWriteBoxProps) => {
  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box className='post-wirte-box'>
      <TextField
        id='post-write-title'
        name='title'
        variant='outlined'
        size='small'
        placeholder='타이틀'
        onChange={handleChangeInput}
      />
      <TextField
        id='post-write-content'
        name='content'
        variant='outlined'
        placeholder='내용'
        multiline
        onChange={handleChangeInput}
        minRows={10}
        maxRows={10}
      />
    </Box>
  );
};

export default PostWriteBox;
