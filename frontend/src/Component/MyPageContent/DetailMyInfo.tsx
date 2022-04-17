import { Box, Typography, Rating, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const DetailMyInfo: React.FC = () => {
  return (
    <Box className='detail-myinfo'>
      <Box className='myinfo-container'>
        <Typography className='myinfo-key'>이메일</Typography>
        <Typography className='myinfo-value'>jeeham0226@naver.com</Typography>
      </Box>
      <Box className='myinfo-container'>
        <Typography className='myinfo-key'>인증 정보</Typography>
        <Box className='myinfo-cert'>
          <Typography className='myinfo-value'>2022.02.28 월요일</Typography>
          <CheckIcon className='myinfo-check-icon' />
        </Box>
      </Box>
      <Box className='myinfo-container'>
        <Typography className='myinfo-key'>매너점수</Typography>
        <Box className='myinfo-rating'>
          <Rating
            name='manner-rating'
            readOnly
            defaultValue={2.5}
            precision={0.5}
            value={5.0}
          />
          <Typography className='myinfo-value'>5.0점</Typography>
        </Box>
      </Box>
      <Box className='myinfo-container'>
        <Typography className='myinfo-key'>추가 정보</Typography>
        <Typography className='myinfo-value'>쏼라쏼라~~</Typography>
      </Box>
      <Box className='detail-btn-container'>
        <Button variant='outlined' className='pwd-chg-btn'>
          패스워드 변경
        </Button>
        <Button variant='contained' className='unsubscribe-btn'>
          회원 탈퇴 하기
        </Button>
      </Box>
    </Box>
  );
};

export default DetailMyInfo;
