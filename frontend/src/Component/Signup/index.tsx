import SignupForm from "./SignupForm";

const SignupTitle: React.FC = () => {
  return <h1>Sign up</h1>;
};

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-container-box">
        <SignupTitle />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
