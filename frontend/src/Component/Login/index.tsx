import { useState } from "react";
import LoginForm from "./LoginForm";
import LoginOuterLink from "./LoginOuterLink";
import EasyLogin from "./EasyLogin";

interface LoginData {
  email: string;
  password: string;
}

interface LoginList {
  loginList: LoginData[];
}

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img className="logo" alt="Logo" src={`/img/logo_long.png`} />
    </div>
  );
};

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [loginList, setLoginList] = useState<LoginData[]>([]);

  return (
    <div className="login-container">
      <div className="login-container-box">
        <Logo />
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          loginList={loginList}
          setLoginList={setLoginList}
        />
        <LoginOuterLink />
        <EasyLogin />
      </div>
    </div>
  );
};

export default Login;
