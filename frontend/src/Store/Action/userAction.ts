import {
  LOG_IN_REQUEST,
  SAVE_UESR_LOGIN_STATUS,
  SIGN_UP_REQUEST,
} from '../type';
import { LoginRequest, SingUpRequest, User } from '../../Types/UserType';
import requestAPI from '../../Util/Request';

export const saveUserLoginStatus = (user: User) => {
  return {
    type: SAVE_UESR_LOGIN_STATUS,
    payload: user,
  };
};

export const loginUser = async ({ email, password }: LoginRequest) => {
  const res = await requestAPI.post('/api/user/login', { email, password });
  if (res.status === 200) {
    saveUserLoginStatus(res?.data);
  }
  return {
    type: LOG_IN_REQUEST,
    payload: res.data,
  };
};

export const signUpUser = async ({
  email,
  nickname,
  password,
}: SingUpRequest) => {
  const res = await requestAPI.post('/api/user/signup', {
    email,
    nickname,
    password,
  });

  return {
    type: SIGN_UP_REQUEST,
    payload: res,
  };
};
