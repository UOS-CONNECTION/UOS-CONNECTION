import { useCallback, useState } from 'react';
import { Box, Button, SelectChangeEvent } from '@mui/material';

import PostWriteBox from './PostWriteBox';
import PostWriteHeader, { Category, CategoryType } from './PostWriteHeader';

export interface PostWriteValueType {
  title: string;
  content: string;
  image: any;
  category: CategoryType;
}

const PostWrite: React.FC = () => {
  const [inputValue, setInputValue] = useState<PostWriteValueType>({
    title: '',
    content: '',
    image: '',
    category: Category.unknown,
  } as PostWriteValueType);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    []
  );

  const handleBtnClick = useCallback(
    (e) => {
      handleFormSubmit(e);
    },
    [handleFormSubmit]
  );

  const handleCategoryChange = (e: SelectChangeEvent<unknown>) => {
    const nextCategory = e.target.value as CategoryType;
    setInputValue((prev) => ({ ...prev, category: nextCategory }));
  };

  return (
    <Box className='post-write-container'>
      <form onSubmit={handleFormSubmit}>
        <PostWriteHeader
          category={inputValue.category as number}
          handleCategoryChange={handleCategoryChange}
        />
        <PostWriteBox />
        <Button variant='outlined' onClick={handleBtnClick}>
          작성 완료
        </Button>
      </form>
    </Box>
  );
};

export default PostWrite;
