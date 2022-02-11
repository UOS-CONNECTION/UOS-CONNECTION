import { Box, Avatar, Typography, Stack } from "@mui/material";

const EasyLogin: React.FC = () => {
  return (
    <div className="easylogin-container">
      <Box>
        <Typography component="h3" fontSize="12px" mb={2}>
          SNS 계정으로 간편 로그인/회원가입
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={3}>
          <Avatar
            alt="Google"
            src={`/img/google.ico`}
            sx={{ width: 48, height: 48 }}
          />
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
    </div>
  );
};

export default EasyLogin;
