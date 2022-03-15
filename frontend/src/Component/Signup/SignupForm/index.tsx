import { useState } from 'react';

import Email from './Email';
import Password from './Password';
import PasswordCheck from './PasswordCheck';
import Nickname from './Nickname';
import Agree from './Agree';
import SignupButton from './SignupButton';

interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

interface ISignupForm {
  signupData: SignupData;
  setSignupData: Function;
  signupList: SignupData[];
  setSignupList: Function;
}

const SignupForm: React.FC<ISignupForm> = ({
  signupData,
  setSignupData,
  signupList,
  setSignupList,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const makeSignupData = (
    _email: string,
    _password: string,
    _nickname: string
  ) => {
    return { email: _email, password: _password, nickname: _nickname };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let inputData: SignupData;
    inputData = makeSignupData(email, password, nickname);
    setSignupData(inputData);
    setSignupList([...signupList, inputData]);
    console.log(inputData);
  };

  return (
    <form className='signupform-container' onSubmit={handleSubmit}>
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      <PasswordCheck password={password} />
      <Nickname nickname={nickname} setNickname={setNickname} />
      <Agree />
      <SignupButton />
    </form>
  );
};

export default SignupForm;
