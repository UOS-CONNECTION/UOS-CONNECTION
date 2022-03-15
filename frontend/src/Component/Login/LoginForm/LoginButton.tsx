import { Button } from '@mui/material';

const LoginButton: React.FC = () => {
  return (
    <div className='loginbutton-container'>
      <Button className='loginbutton' type='submit' variant='contained'>
        로그인
      </Button>
    </div>
  );
};

export default LoginButton;
