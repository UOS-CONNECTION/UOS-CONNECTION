import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { PostWriteValueType } from '.';

import { ValueOf } from '../../Util/HelperType';

// TODO
// 백엔드 호출에서 이넘타입 받아서 수정
export const Category = {
  things: 10,
  talent: 20,
  unknown: '',
} as const;

export type CategoryType = ValueOf<typeof Category>;

interface PostWriteHeaderProps {
  category: number;
  setInputValue: Dispatch<SetStateAction<PostWriteValueType>>;
}

const PostWriteHeader = ({ category, setInputValue }: PostWriteHeaderProps) => {
  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setInputValue((prev) => ({
          ...prev,
          image: reader.result?.toString() ?? '',
        }));
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCategoryChange = (e: SelectChangeEvent<unknown>) => {
    const nextCategory = e.target.value as CategoryType;
    setInputValue((prev) => ({ ...prev, category: nextCategory }));
  };

  return (
    <Box className='post-write-header'>
      <Typography>글 작성하기</Typography>
      <Box className='post-write-select-box'>
        <Box component='span'>
          <FormControl fullWidth>
            <InputLabel id='category-select'>카테고리</InputLabel>
            <Select
              id='demo-simple-select'
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value={Category.talent}>재능 공유</MenuItem>
              <MenuItem value={Category.things}>물품 공유</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box component='span' className='border'>
          <Button variant='contained' component='label'>
            Upload
            <input
              accept='image/*'
              id='contained-button-file'
              type='file'
              hidden
              onChange={handleSelectFile}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostWriteHeader;
