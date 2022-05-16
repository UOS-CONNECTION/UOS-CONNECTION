import {
  ActionType,
  LOG_IN_REQUEST,
  SAVE_UESR_LOGIN_STATUS,
  SIGN_UP_REQUEST,
} from '../type';

const userReducer = (action: ActionType, state = {}) => {
  switch (action?.type) {
    case LOG_IN_REQUEST:
      return { ...state, login: action.payload };
    case SAVE_UESR_LOGIN_STATUS:
      return { ...state, isLogin: true };
    case SIGN_UP_REQUEST:
      return { ...state, signup: action.payload };
    default:
      return state;
  }
};

export default userReducer;
