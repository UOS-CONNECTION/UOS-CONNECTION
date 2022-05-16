import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Email from './Email';
import Password from './Password';
import PasswordCheck from './PasswordCheck';
import Nickname from './Nickname';
import Agree from './Agree';
import SignupButton from './SignupButton';
import { SignUpData } from '../type';
import { signUpUser } from '../../../Store/Action/userAction';

const makeSignUpData = (signUpData: SignUpData) => {
  return {
    email: `${signUpData.email}@${signUpData.domain}`,
    nickname: signUpData.nickname,
    password: signUpData.password,
  };
};

const SignupForm: React.FC = () => {
  const [signUpData, setSignupData] = useState<SignUpData>({
    email: '',
    password: '',
    nickname: '',
    domain: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, nickname, password } = makeSignUpData(signUpData);
      const signUpRes = await dispatch(
        signUpUser({ email, nickname, password }),
      );

      if (signUpRes.payload.status === 200) {
        navigate('/login');
      }
    },
    [dispatch, navigate, signUpData],
  );

  const handleSignUpInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignupData({
        ...signUpData,
        [name]: value,
      });
    },
    [setSignupData, signUpData],
  );

  return (
    <form className='signupform-container' onSubmit={handleSubmit}>
      <Email
        email={signUpData.email}
        domain={signUpData.domain}
        handleSignUpInputChange={handleSignUpInputChange}
      />
      <Password
        password={signUpData.password}
        handleSignUpInputChange={handleSignUpInputChange}
      />
      <PasswordCheck password={signUpData.password} />
      <Nickname
        nickname={signUpData.nickname}
        handleSignUpInputChange={handleSignUpInputChange}
      />
      <Agree />
      <SignupButton />
    </form>
  );
};

export default SignupForm;
