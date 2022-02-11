import { Button } from "@mui/material";

const LoginButton: React.FC = () => {
  return (
    <div className="loginbutton-container">
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2, height: 50 }}
      >
        로그인
      </Button>
    </div>
  );
};

export default LoginButton;
