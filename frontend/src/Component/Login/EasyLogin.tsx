import { Typography, Avatar } from '@mui/material';
import requestAPI from '../../Util/Request';

const EasyLogin: React.FC = () => {
  const handleGoogleClick = () => {};
  const handleNaverClick = () => {};

  const handleKakaoClick = async () => {
    const res = await requestAPI.get('/api/user/kakao');
    return res;
  };

  return (
    <section className='easylogin-container'>
      <Typography variant='h3' className='easylogin-title'>
        SNS 계정으로 간편 로그인/회원가입
      </Typography>
      <div className='icons-container'>
        <Avatar
          className='easylogin-icon'
          alt='Google'
          src='/img/google.ico'
          onClick={handleGoogleClick}
        />
        <Avatar
          className='easylogin-icon'
          alt='Naver'
          src='/img/naver.ico'
          onClick={handleNaverClick}
        />
        <Avatar
          className='easylogin-icon'
          alt='Kakao'
          src='/img/kakao.svg'
          onClick={handleKakaoClick}
        />
      </div>
    </section>
  );
};

export default EasyLogin;
