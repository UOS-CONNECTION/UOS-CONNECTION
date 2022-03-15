import { useState } from 'react';
import { TextField } from '@mui/material';

interface PasswordCheck {
  password: string;
}

const PasswordCheck: React.FC<PasswordCheck> = ({ password }) => {
  const [repassword, setRepassword] = useState('');
  const [invalidRepassword, reInvalidRepassword] = useState(false);

  const handleRepasswordChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRepassword(e.target.value);
  };

  const validateRepassword = () => {
    if (repassword === password) {
      /* 입력한 2개의 비밀번호가 동일한 경우 */
      reInvalidRepassword(false);
    } else {
      reInvalidRepassword(true);
      console.log('not same password');
    }
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
        helperText={invalidRepassword ? 'Please enter a same password' : ''}
      />
    </div>
  );
};

export default PasswordCheck;
