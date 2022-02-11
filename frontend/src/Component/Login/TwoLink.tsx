import { Link } from "@mui/material";

const TwoLink: React.FC = () => {
  return (
    <div className="twolink-container">
      <Link className="first-link" href="#" underline="hover">
        비밀번호 재설정
      </Link>
      <Link className="second-link" href="/signup" underline="hover">
        회원가입
      </Link>
    </div>
  );
};

export default TwoLink;
