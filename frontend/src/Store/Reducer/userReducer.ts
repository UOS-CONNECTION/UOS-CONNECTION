import { ActionType, LOG_IN_REQUEST, SAVE_UESR_LOGIN_STATUS } from '../type';

const userReducer = (action: ActionType, state = {}) => {
  switch (action?.type) {
    case LOG_IN_REQUEST:
      return { ...state, login: action.payload };
    case SAVE_UESR_LOGIN_STATUS:
      return { ...state, isLogin: true };
    default:
      return state;
  }
};

export default userReducer;
