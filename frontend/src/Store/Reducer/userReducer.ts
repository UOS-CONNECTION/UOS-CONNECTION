import { ActionType, LOG_IN_REQUEST } from '../type';

const userReducer = (action: ActionType, state = {}) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

export default userReducer;
