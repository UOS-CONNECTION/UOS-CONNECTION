import { Typography } from '@mui/material';

import SignupForm from './SignupForm';

const SignupTitle: React.FC = () => {
  return (
    <Typography variant='h1' className='signup-title'>
      Sign up
    </Typography>
  );
};

const Signup: React.FC = () => {
  return (
    <div className='signup-container'>
      <div className='signup-container-box'>
        <SignupTitle />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
