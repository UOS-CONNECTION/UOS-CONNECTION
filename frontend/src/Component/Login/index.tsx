import {
  Box,
  Avatar,
  Typography,
  TextField,
  Grid,
  Link,
  Button,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
/* import naver from "/img/naver.ico";
import kakao from "/img/kakao.svg";
import logo from "/img/logo.svg"; */

const Login: React.FC = () => {
  return (
    <Container
      component="main"
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Logo"
            src={`/img/logo.svg`}
            sx={{ width: 60, height: 60 }}
          />
          <Typography component="h1" variant="h5">
            시대이음
          </Typography>
        </Box>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, height: 50 }}
          >
            로그인
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              비밀번호 재설정
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              회원가입
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ width: 1, mt: 3, mb: 3 }} />
        <Box>
          <Typography component="h3" fontSize="12px" mb={2}>
            SNS 계정으로 간편 로그인/회원가입
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={3}>
            <Avatar alt="Google" sx={{ width: 48, height: 48 }}>
              <GoogleIcon />
            </Avatar>
            <Avatar
              alt="Naver"
              src={`/img/naver.ico`}
              sx={{ width: 48, height: 48 }}
            />
            <Avatar
              alt="Kakao"
              src={`/img/kakao.svg`}
              sx={{ width: 48, height: 48 }}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
