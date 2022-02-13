import { Link } from "@mui/material";

const LoginOuterLink: React.FC = () => {
  return (
    <div className="link-container">
      <Link className="reset-password-link" href="#" underline="hover">
        비밀번호 재설정
      </Link>
      <Link className="signup-link" href="/signup" underline="hover">
        회원가입
      </Link>
    </div>
  );
};

export default LoginOuterLink;
