import { useState } from 'react';
import { TextField } from '@mui/material';

import { InputEventHandler } from '../type';

interface PasswordProps {
  password: string;
  handleSignUpInputChange: InputEventHandler;
}

const isInValidPassword = (password: string) => {
  const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return !passwordRegex.test(password);
};

const Password: React.FC<PasswordProps> = ({
  password,
  handleSignUpInputChange,
}) => {
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const validatePassword = () => {
    setInvalidPassword(isInValidPassword(password));
  };

  return (
    <div className='input-container'>
      <div className='input-title'>비밀번호</div>
      <div className='input-sub'>
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </div>
      <TextField
        className='password-input'
        label='비밀번호'
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={handleSignUpInputChange}
        onBlur={validatePassword}
        error={invalidPassword}
        helperText={invalidPassword && 'Please enter a valid password'}
      />
    </div>
  );
};

export default Password;
