import {
  GET_ALL_POST_REQUEST,
  GET_ONE_POST_REQUEST,
  SELECT_ONE_POST,
} from '../type';

const postReducer = (action: any, state = {}) => {
  switch (action.type) {
    case GET_ALL_POST_REQUEST:
      return { ...state, posts: action.payload };
    case GET_ONE_POST_REQUEST:
      return { ...state, postFromServer: action.payload };
    case SELECT_ONE_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export default postReducer;
