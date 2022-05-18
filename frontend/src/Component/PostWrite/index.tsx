import { useCallback, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PostWriteBox from './PostWriteBox';
import PostWriteHeader, { Category, CategoryType } from './PostWriteHeader';
import requestAPI from '../../Util/Request';

export interface PostWriteValueType {
  title: string;
  content: string;
  image: string;
  category: CategoryType;
}

const PostWrite: React.FC = () => {
  const [inputValue, setInputValue] = useState<PostWriteValueType>({
    title: '',
    content: '',
    image: '',
    category: Category.unknown,
  } as PostWriteValueType);
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { title, content, category } = inputValue;
      const userId = 1; // TODO: 리덕스 상태에서 가져오는 로직 생성후 연동
      if (title === '' || content === '' || category === '') {
        alert('게시글 항목을 채워주세요.');
        return;
      }
      const submitRes = await requestAPI.post('/api/post', {
        title,
        content,
        category,
        userId,
      });
      if (submitRes.status === 200) {
        alert('포스트를 저장했습니다.');
        navigate('/');
      }
    },
    [inputValue, navigate],
  );

  const handleBtnClick = useCallback(
    (e) => {
      handleFormSubmit(e);
    },
    [handleFormSubmit],
  );

  return (
    <Box className='post-write-container'>
      <form onSubmit={handleFormSubmit}>
        <PostWriteHeader
          category={inputValue.category as number}
          setInputValue={setInputValue}
        />
        <PostWriteBox setInputValue={setInputValue} />
        <Button variant='outlined' onClick={handleBtnClick}>
          작성 완료
        </Button>
      </form>
    </Box>
  );
};

export default PostWrite;
