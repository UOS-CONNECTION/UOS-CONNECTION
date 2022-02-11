import {
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const Email: React.FC = () => {
  return (
    <div className="input-container">
      <div className="input-title">이메일</div>
      <div className="email-container">
        <TextField
          className="email-input"
          label="이메일"
          id="email"
          name="email"
          autoComplete="email"
        />
        <span className="symbol-at">@</span>
        <FormControl className="email-select">
          <InputLabel id="email-input-label">선택해주세요.</InputLabel>
          <Select
            labelId="email-input-label"
            id="demo-simple-select"
            label="Age"
            /* value={age} */
            /* onChange={handleChange} */
          >
            <MenuItem value={"gmail.com"}>gmail.com</MenuItem>
            <MenuItem value={"naver.com"}>naver.com</MenuItem>
            <MenuItem value={"daum.net"}>daum.net</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button className="email-button" type="submit" variant="outlined">
        이메일 인증하기
      </Button>
    </div>
  );
};

export default Email;
