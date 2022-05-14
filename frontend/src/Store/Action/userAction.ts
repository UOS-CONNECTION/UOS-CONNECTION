import { LOG_IN_REQUEST } from '../type';
import { LoginRequeset } from '../../Types/UserType';
import requestAPI from '../../Util/Request';

export const loginUser = async ({ email, password }: LoginRequeset) => {
  const res = await requestAPI.post('/api/user/login', { email, password });

  return {
    type: LOG_IN_REQUEST,
    payload: res,
  };
};
