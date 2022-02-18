import { Button } from "@mui/material";

const SignupButton: React.FC = () => {
  return (
    <Button
      className="signup-button"
      type="submit"
      fullWidth
      variant="contained"
    >
      회원가입하기
    </Button>
  );
};

export default SignupButton;
