import { useState } from "react";
import SignupForm from "./SignupForm";
import { Typography } from "@mui/material";

interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

interface SignupList {
  signupList: SignupData[];
}

const SignupTitle: React.FC = () => {
  return (
    <Typography variant="h1" className="signup-title">
      Sign up
    </Typography>
  );
};

const Signup: React.FC = () => {
  const [signupData, setSignupData] = useState<SignupData>({
    email: "",
    password: "",
    nickname: "",
  });
  const [signupList, setSignupList] = useState<SignupData[]>([]);

  return (
    <div className="signup-container">
      <div className="signup-container-box">
        <SignupTitle />
        <SignupForm
          signupData={signupData}
          setSignupData={setSignupData}
          signupList={signupList}
          setSignupList={setSignupList}
        />
      </div>
    </div>
  );
};

export default Signup;
