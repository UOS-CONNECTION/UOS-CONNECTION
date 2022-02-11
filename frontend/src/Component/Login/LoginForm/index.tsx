import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginForm: React.FC = () => {
  return (
    <div className="loginform-container">
      <LoginInput />
      <LoginButton />
    </div>
  );
};

export default LoginForm;
