import Email from "./Email";
import Password from "./Password";
import PasswordCheck from "./PasswordCheck";
import Nickname from "./Nickname";
import Agree from "./Agree";
import SignupButton from "./SignupButton";

const SignupForm: React.FC = () => {
  return (
    <div className="signupform-container">
      <Email />
      <Password />
      <PasswordCheck />
      <Nickname />
      <Agree />
      <SignupButton />
    </div>
  );
};

export default SignupForm;
