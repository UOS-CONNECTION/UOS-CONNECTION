import { TextField } from "@mui/material";

const Nickname: React.FC = () => {
  return (
    <div className="input-container">
      <div className="input-title">닉네임</div>
      <div className="input-sub">
        다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
      </div>
      <TextField
        className="nickname-input"
        name="nickname"
        label="닉네임"
        type="nickname"
        id="nickname"
        autoComplete="nickname"
      />
    </div>
  );
};

export default Nickname;
