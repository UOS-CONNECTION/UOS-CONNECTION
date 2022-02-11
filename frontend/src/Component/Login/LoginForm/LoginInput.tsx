import { Box, TextField } from "@mui/material";

const LoignInput: React.FC = () => {
  return (
    <div className="logininput-container">
      <Box>
        <TextField
          sx={{ mb: 1, mt: 3 }}
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="email"
        />
        <TextField
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Box>
    </div>
  );
};

export default LoignInput;
