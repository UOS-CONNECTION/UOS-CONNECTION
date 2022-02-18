import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

interface LoginData {
  email: string;
  password: string;
}

interface LoginForm {
  loginData: LoginData;
  setLoginData: Function;
  loginList: LoginData[];
  setLoginList: Function;
}

const LoginForm: React.FC<LoginForm> = ({
  loginData,
  setLoginData,
  loginList,
  setLoginList,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const makeLoginData = (_email: string, _password: string) => {
    return { email: _email, password: _password };
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let inputData: LoginData;
    inputData = makeLoginData(email, password);
    setLoginData(inputData);
    setLoginList([...loginList, inputData]);
    console.log(inputData);
  };

  return (
    <form className="loginform-container" onSubmit={handleSubmit}>
      <LoginInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginButton />
    </form>
  );
};

export default LoginForm;
