import { LOG_IN_REQUEST } from '../type';

export const loginUser = async () => {
  const res = await 2;

  return {
    type: LOG_IN_REQUEST,
    payload: res,
  };
};
