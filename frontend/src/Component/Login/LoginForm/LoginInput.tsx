import { TextField } from "@mui/material";

const LoignInput: React.FC = () => {
  return (
    <div className="logininput-container">
      <TextField
        className="logininput-email"
        id="email"
        label="이메일"
        name="email"
        autoComplete="email"
      />
      <TextField
        className="logininput-password"
        name="password"
        label="비밀번호"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </div>
  );
};

export default LoignInput;
