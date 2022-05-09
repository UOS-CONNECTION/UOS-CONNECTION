import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material';

import { ValueOf } from '../../Util/HelperType';

// TODO
// 백엔드 호출에서 이넘타입 받아서 수정
export const Category = {
  things: 10,
  talent: 20,
  unknown: '',
} as const;

export type CategoryType = ValueOf<typeof Category>;

const Input = styled('input')({
  display: 'none',
});

interface PostWriteHeaderProps {
  category: number;
  handleCategoryChange: (e: SelectChangeEvent<unknown>) => void;
}

const PostWriteHeader = ({
  category,
  handleCategoryChange,
}: PostWriteHeaderProps) => {
  return (
    <Box className='post-write-header'>
      <p>글 작성하기</p>
      <div className='post-write-select-box'>
        <span>
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
        </span>
        <span className='border'>
          <label htmlFor='contained-button-file'>
            <Input
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
            />
            <Button variant='contained' component='span'>
              Upload
            </Button>
          </label>
        </span>
      </div>
    </Box>
  );
};

export default PostWriteHeader;
