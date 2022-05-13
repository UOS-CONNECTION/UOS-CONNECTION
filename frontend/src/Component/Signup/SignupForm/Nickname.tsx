import { useState } from 'react';
import { TextField } from '@mui/material';

import { InputEventHandler } from '../type';

interface SingupNickname {
  nickname: string;
  handleSignUpInputChange: InputEventHandler;
}

const isInValidNickname = (nickname: string) => {
  const nicknameRegex: RegExp = /^[A-Za-z]{2,15}$/;

  return !nicknameRegex.test(nickname);
};

const Nickname: React.FC<SingupNickname> = ({
  nickname,
  handleSignUpInputChange,
}: SingupNickname) => {
  const [invalidNickname, setInvalidNickname] = useState<boolean>(false);

  const validateNickname = () => {
    setInvalidNickname(isInValidNickname(nickname));
  };

  return (
    <div className='input-container'>
      <div className='input-title'>닉네임</div>
      <div className='input-sub'>
        다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
      </div>
      <TextField
        className='nickname-input'
        label='닉네임'
        type='nickname'
        name='nickname'
        id='nickname'
        value={nickname}
        onChange={handleSignUpInputChange}
        onBlur={validateNickname}
        error={invalidNickname}
        helperText={invalidNickname && 'Please enter a valid nickname'}
      />
    </div>
  );
};

export default Nickname;
