import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginForm: React.FC = () => {
  return (
    <section className="loginform-container">
      <LoginInput />
      <LoginButton />
    </section>
  );
};

export default LoginForm;
