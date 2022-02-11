import Logo from "./Logo";
import LoginForm from "./LoginForm";
import TwoLink from "./TwoLink";
import EasyLogin from "./EasyLogin";

/*
import GoogleIcon from "@mui/icons-material/Google";
import naver from "/img/naver.ico";
import kakao from "/img/kakao.svg";
import logo from "/img/logo.svg";
*/

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-container-box">
        <Logo />
        <LoginForm />
        <TwoLink />
        <EasyLogin />
      </div>
    </div>
  );
};

export default Login;
