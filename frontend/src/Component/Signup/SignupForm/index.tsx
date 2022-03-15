import { Dispatch, SetStateAction, useCallback } from 'react';

import Email from './Email';
import Password from './Password';
import PasswordCheck from './PasswordCheck';
import Nickname from './Nickname';
import Agree from './Agree';
import SignupButton from './SignupButton';
import { SignUpData } from '../type';

interface SignUpFromProps {
  signUpData: SignUpData;
  setSignupData: Dispatch<SetStateAction<SignUpData>>;
}

const makeSignUpData = (signUpData: SignUpData) => {
  return {
    email: `${signUpData.email}@${signUpData.domain}`,
    nickname: signUpData.nickname,
    password: signUpData.password,
  };
};

const SignupForm: React.FC<SignUpFromProps> = ({
  signUpData,
  setSignupData,
}) => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(makeSignUpData(signUpData));
    },
    [signUpData]
  );

  const handleSignUpInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignupData({
        ...signUpData,
        [name]: value,
      });
    },
    [setSignupData, signUpData]
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
