import { Typography, Avatar } from '@mui/material';
import requestAPI from '../../Util/Request';

const EasyLogin: React.FC = () => {
  const handleNaverClick = () => {};

  const handleKakaoClick = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  };

  const handleGoogleClick = async () => {
    await requestAPI.get('/api/user/google');
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
