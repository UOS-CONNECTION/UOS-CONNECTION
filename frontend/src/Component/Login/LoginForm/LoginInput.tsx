import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { TextField } from '@mui/material';

interface LoginInput {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const isInValidEmail = (email: string) => {
  const emailRegex: RegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return !emailRegex.test(email);
};

const LoignInput: React.FC<LoginInput> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;

      if (name === 'email') setEmail(value);
      else if (name === 'password') setPassword(value);
    },
    [setEmail, setPassword]
  );

  const validateEmail = () => {
    setInvalidEmail(isInValidEmail(email));
  };

  return (
    <div className='logininput-container'>
      <TextField
        className='logininput-email'
        label='이메일'
        id='email'
        name='email'
        value={email}
        onChange={handleInputChange}
        onBlur={validateEmail}
        error={invalidEmail}
        helperText={invalidEmail && 'Please enter a valid email'}
      />
      <TextField
        className='logininput-password'
        label='비밀번호'
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default LoignInput;
