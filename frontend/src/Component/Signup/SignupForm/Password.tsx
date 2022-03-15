import { useState } from 'react';
import { TextField } from '@mui/material';

interface Password {
  password: string;
  setPassword: Function;
}

const Password: React.FC<Password> = ({ password, setPassword }) => {
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [invalidPassword, setInvalidPassword] = useState(false);

  const validatePassword = () => {
    if (passwordRegex.test(password)) {
      setInvalidPassword(false);
      console.log(password);
    } else {
      setInvalidPassword(true);
      console.log('invalid password');
    }
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
        onChange={handlePasswordChange}
        onBlur={validatePassword}
        error={invalidPassword}
        helperText={invalidPassword ? 'Please enter a valid password' : ''}
      />
    </div>
  );
};

export default Password;
