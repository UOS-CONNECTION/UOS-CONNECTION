import { Button } from "@mui/material";

const SignupButton: React.FC = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      /* sx={{ mt: 2, mb: 2, height: 50 }} */
    >
      회원가입하기
    </Button>
  );
};

export default SignupButton;
