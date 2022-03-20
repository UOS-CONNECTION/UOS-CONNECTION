import { Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EasyLogin: React.FC = () => {
  const navigate = useNavigate();
  const handleGoogleClick = () => {
    navigate('/auth/google');
  };
  const handleNaverClick = () => {
    navigate('/auth/naver');
  };
  const handleKakaoClick = () => {
    navigate('/auth/kakao');
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
