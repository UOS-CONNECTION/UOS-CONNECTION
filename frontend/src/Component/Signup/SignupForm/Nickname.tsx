import { useState } from "react";
import { TextField } from "@mui/material";

interface SingupNickname {
  nickname: string;
  setNickname: Function;
}

const Nickname: React.FC<SingupNickname> = ({ nickname, setNickname }) => {
  const handleNicknameChange = (e: any) => {
    setNickname(e.target.value);
  };

  const nicknameRegex: RegExp = /^[A-Za-z]{2,15}$/;
  const [invalidNickname, setInvalidNickname] = useState(false);

  const validateNickname = (e: any) => {
    if (nicknameRegex.test(nickname)) {
      setInvalidNickname(false);
      console.log(nickname);
    } else {
      setInvalidNickname(true);
      console.log("invalid nickname");
    }
  };

  return (
    <div className="input-container">
      <div className="input-title">닉네임</div>
      <div className="input-sub">
        다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
      </div>
      <TextField
        className="nickname-input"
        label="닉네임"
        type="nickname"
        name="nickname"
        id="nickname"
        value={nickname}
        onChange={handleNicknameChange}
        onBlur={validateNickname}
        error={invalidNickname}
        helperText={invalidNickname ? "Please enter a valid nickname" : ""}
      />
    </div>
  );
};

export default Nickname;
