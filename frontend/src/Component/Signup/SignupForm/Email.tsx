import { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from '@mui/material';

interface SignupEmail {
  email: string;
  setEmail: Function;
}

const Email: React.FC<SignupEmail> = ({ email, setEmail }) => {
  const [emailId, setEmailId] = useState('');
  const [selectDomain, setSelectDomain] = useState('');

  const handleEmailIdChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmailId(e.target.value);
  };
  const handleSelectDomain = (e: SelectChangeEvent<string>) => {
    setSelectDomain(e.target.value);
  };

  const handleEmailButtonClicked = () => {
    setEmail(emailId.concat('@', selectDomain));
    console.log('Your email: ' + emailId.concat('@', selectDomain));
  };

  return (
    <div className='input-container'>
      <div className='input-title'>이메일</div>
      <div className='email-container'>
        <TextField
          className='email-input'
          label='이메일'
          id='email'
          name='email'
          value={emailId}
          onChange={handleEmailIdChange}
        />
        <span className='symbol-at'>@</span>
        <FormControl className='domain-select'>
          <InputLabel id='domain-select-label'>선택해주세요.</InputLabel>
          <Select
            labelId='domain-select-label'
            label='선택해주세요.'
            value={selectDomain}
            onChange={handleSelectDomain}
          >
            <MenuItem value={'gmail.com'}>gmail.com</MenuItem>
            <MenuItem value={'naver.com'}>naver.com</MenuItem>
            <MenuItem value={'daum.net'}>daum.net</MenuItem>
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
