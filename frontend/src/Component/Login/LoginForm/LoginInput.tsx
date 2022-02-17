import { useState } from "react";
import { TextField } from "@mui/material";

interface LoginInput {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
}

const LoignInput: React.FC<LoginInput> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const emailRegex: RegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const [invalidEmail, setInvalidEmail] = useState(false);

  const validateEmail = (e: any) => {
    if (emailRegex.test(email)) {
      setInvalidEmail(false);
      console.log(email);
    } else {
      console.log("invalid email");
      setInvalidEmail(true);
    }
  };

  return (
    <div className="logininput-container">
      <TextField
        className="logininput-email"
        label="이메일"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        error={invalidEmail}
        helperText={invalidEmail ? "Please enter a valid email" : ""}
      />
      <TextField
        className="logininput-password"
        label="비밀번호"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default LoignInput;
