import { useState } from 'react';
import { TextField } from '@mui/material';

interface PasswordCheckProps {
  password: string;
}

const PasswordCheck: React.FC<PasswordCheckProps> = ({
  password,
}: PasswordCheckProps) => {
  const [repassword, setRepassword] = useState<string>('');
  const [invalidRepassword, setInvalidRepassword] = useState<boolean>(false);

  const handleRepasswordChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setRepassword(e.target.value);
  };

  const validateRepassword = () => {
    setInvalidRepassword(repassword !== password);
  };

  return (
    <div className='input-container'>
      <div className='input-title'>비밀번호 확인</div>
      <TextField
        className='passwordcheck-input'
        label='비밀번호 확인'
        type='password'
        name='repassword'
        id='repassword'
        value={repassword}
        onChange={handleRepasswordChange}
        onBlur={validateRepassword}
        error={invalidRepassword}
        helperText={invalidRepassword && 'Please enter a same password'}
      />
    </div>
  );
};

export default PasswordCheck;
