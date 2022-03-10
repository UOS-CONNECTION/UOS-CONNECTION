import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import LoginOuterLink from "./LoginOuterLink";
import EasyLogin from "./EasyLogin";
import requestAPI from "../../Util/Request";
import { PhotoSizeSelectLargeOutlined } from "@mui/icons-material";

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

  useEffect(() => {
    requestAPI.post(`/api/user/login`, loginData).then((res) => {
      console.log("good!");
      console.log(res);
    });
  }, [loginData]);

  /*  const postLogin = async () => {
    const res = await requestAPI.post(`/api/user/login`, loginData);
    console.log(res);
  };

  useEffect(() => {
    postLogin();
  }, [loginData]); */

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
