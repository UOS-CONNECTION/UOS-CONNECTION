import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import { loginUser } from '../../../Store/Action/userAction';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inputData = { email, password };
      const res = await dispatch(loginUser(inputData));
      if (res.payload.status === 200) {
        navigate('/');
      }
    },
    [dispatch, email, navigate, password],
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
