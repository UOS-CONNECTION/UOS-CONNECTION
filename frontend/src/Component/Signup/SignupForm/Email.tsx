import { useCallback } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

import { InputEventHandler } from '../type';

interface SignupEmailProps {
  email: string;
  domain: string;
  handleSignUpInputChange: InputEventHandler;
}

const Email: React.FC<SignupEmailProps> = ({
  email,
  domain,
  handleSignUpInputChange,
}) => {
  const handleEmailButtonClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      // TODO
      // email 인증 진행
    },
    []
  );

  return (
    <div className='input-container'>
      <div className='input-title'>이메일</div>
      <div className='email-container'>
        <TextField
          className='email-input'
          label='이메일'
          id='email'
          name='email'
          value={email}
          onChange={handleSignUpInputChange}
        />
        <span className='symbol-at'>@</span>
        <FormControl className='domain-select'>
          <InputLabel id='domain-select-label'>선택해주세요.</InputLabel>
          <Select
            labelId='domain-select-label'
            label='선택해주세요.'
            name='domain'
            value={domain}
            onChange={handleSignUpInputChange}
          >
            <MenuItem value='gmail.com'>gmail.com</MenuItem>
            <MenuItem value='naver.com'>naver.com</MenuItem>
            <MenuItem value='daum.net'>daum.net</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        className='email-button'
        type='button'
        onClick={handleEmailButtonClicked}
        variant='outlined'
      >
        이메일 인증하기
      </Button>
    </div>
  );
};

export default Email;
