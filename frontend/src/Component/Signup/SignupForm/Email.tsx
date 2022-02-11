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
    <div
      className="input-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="input-title">이메일</div>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            label="이메일"
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" fontSize="20px">
            @
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Email</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              /* value={age} */
              /* onChange={handleChange} */
            >
              <MenuItem value={"naver.com"}>naver.com</MenuItem>
              <MenuItem value={"gmail.com"}>gmail.com</MenuItem>
              <MenuItem value={"daum.net"}>daum.net</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 2, mb: 2, height: 50 }}
      >
        이메일 인증하기
      </Button>
    </div>
  );
};

export default Email;
