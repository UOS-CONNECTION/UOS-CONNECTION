import { Box } from '@mui/material';

import MyBasicInfo from './MyBasicInfo';
import MyDetailInfo from './MyDetailInfo';

const MyPageContent: React.FC = () => {
  return (
    <Box className='mypage-container'>
      <MyBasicInfo />
      <MyDetailInfo />
    </Box>
  );
};

export default MyPageContent;
