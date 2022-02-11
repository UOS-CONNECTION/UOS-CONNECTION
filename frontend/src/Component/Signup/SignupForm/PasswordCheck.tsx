import { TextField } from "@mui/material";

const PasswordCheck: React.FC = () => {
  return (
    <div className="input-container">
      <div className="input-title">비밀번호 확인</div>
      <TextField
        className="passwordcheck-input"
        name="password"
        label="비밀번호 확인"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </div>
  );
};

export default PasswordCheck;
