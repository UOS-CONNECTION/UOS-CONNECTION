import { TextField } from "@mui/material";

const Password: React.FC = () => {
  return (
    <div className="input-container">
      <div className="input-title">비밀번호</div>
      <div className="input-sub">
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </div>
      <TextField
        className="password-input"
        fullWidth
        name="password"
        label="비밀번호"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </div>
  );
};

export default Password;
