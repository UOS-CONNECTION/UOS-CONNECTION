import { useCallback, useState } from 'react';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import requestAPI from '../../../Util/Request';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inputData = { email, password };
      const res = await requestAPI.post('/api/user/login', inputData);
      console.log(res);
    },
    [email, password],
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
