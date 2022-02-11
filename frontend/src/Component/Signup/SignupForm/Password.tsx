import { TextField } from "@mui/material";

const Password: React.FC = () => {
  return (
    <div>
      <div
        className="input-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="input-title">비밀번호</div>
        <div className="input-sub" style={{ fontSize: "13px" }}>
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </div>
        <TextField
          /* margin="normal" */
          /* required */
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </div>
      <div
        className="input-container"
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <div className="input-title">비밀번호 확인</div>
        <TextField
          /* margin="normal" */
          /* required */
          fullWidth
          name="password"
          label="비밀번호 확인"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default Password;
