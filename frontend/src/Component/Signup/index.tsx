import { useState } from 'react';
import { Typography } from '@mui/material';

import { SignUpData } from './type';
import SignupForm from './SignupForm';

const SignupTitle: React.FC = () => {
  return (
    <Typography variant='h1' className='signup-title'>
      Sign up
    </Typography>
  );
};

const Signup: React.FC = () => {
  const [signUpData, setSignupData] = useState<SignUpData>({
    email: '',
    password: '',
    nickname: '',
    domain: '',
  });

  return (
    <div className='signup-container'>
      <div className='signup-container-box'>
        <SignupTitle />
        <SignupForm signUpData={signUpData} setSignupData={setSignupData} />
      </div>
    </div>
  );
};

export default Signup;
