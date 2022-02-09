import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

const Signup: React.FC = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{ display: "flex", height: "100vh", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "50px",
          border: 1,
          borderRadius: "10px",
          borderColor: "rgb(200,200,200)",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
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
            로그인
          </Button>
        </div>
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
        <div
          className="agree-container"
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div className="agree-title">약관동의</div>
          <Box
            className="agree-box"
            sx={{
              display: "flex",
              flexDirection: "column",
              border: 1,
              borderRadius: "5px",
              borderColor: "rgb(200,200,200)",
            }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="전체 동의" />
              <Divider sx={{ width: 1, mt: 1, mb: 1 }} />
              <FormControlLabel control={<Checkbox />} label="만 14세 이상" />
              <FormControlLabel
                control={<Checkbox />}
                label="개인정보 수집 및 이용 동의"
              />
            </FormGroup>
          </Box>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          /* sx={{ mt: 2, mb: 2, height: 50 }} */
        >
          회원가입하기
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
