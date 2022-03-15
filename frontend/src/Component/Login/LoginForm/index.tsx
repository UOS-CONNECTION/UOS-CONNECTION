import { useCallback, useState } from 'react';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inputData = { email, password };
      console.log(inputData);
    },
    [email, password]
  );

  return (
    <form className='loginform-container' onSubmit={handleSubmit}>
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
