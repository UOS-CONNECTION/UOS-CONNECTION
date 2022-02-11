import { TextField } from "@mui/material";

const Nickname: React.FC = () => {
  return (
    <div
      className="input-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="input-title">닉네임</div>
      <div className="input-sub" style={{ fontSize: "13px" }}>
        다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
      </div>
      <TextField
        /* margin="normal" */
        /* required */
        fullWidth
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
