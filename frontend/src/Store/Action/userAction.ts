import { LOG_IN_REQUEST, SAVE_UESR_LOGIN_STATUS } from '../type';
import { LoginRequeset, User } from '../../Types/UserType';
import requestAPI from '../../Util/Request';

export const saveUserLoginStatus = (user: User) => {
  return {
    type: SAVE_UESR_LOGIN_STATUS,
    payload: user,
  };
};

export const loginUser = async ({ email, password }: LoginRequeset) => {
  const res = await requestAPI.post('/api/user/login', { email, password });
  if (res.status === 200) {
    saveUserLoginStatus(res?.data);
  }
  return {
    type: LOG_IN_REQUEST,
    payload: res.data,
  };
};
