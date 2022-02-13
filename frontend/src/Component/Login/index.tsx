import LoginForm from "./LoginForm";
import LoginOuterLink from "./LoginOuterLink";
import EasyLogin from "./EasyLogin";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img className="logo" alt="Logo" src={`/img/logo_long.png`} />
    </div>
  );
};

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-container-box">
        <Logo />
        <LoginForm />
        <LoginOuterLink />
        <EasyLogin />
      </div>
    </div>
  );
};

export default Login;
