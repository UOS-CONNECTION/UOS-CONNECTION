import { Typography, Avatar } from '@mui/material';
import requestAPI from '../../Util/Request';

const EasyLogin: React.FC = () => {
  const handleNaverClick = () => {};

  const handleKakaoClick = () => {
    const REST_API_KEY = '6b190b1746f6460e0328fb561516d76f';
    const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  };

  const handleGoogleClick = async () => {
    return await requestAPI.get('/api/user/google');
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
          src={`/img/google.ico`}
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
