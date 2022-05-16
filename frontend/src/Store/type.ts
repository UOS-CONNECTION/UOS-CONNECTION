export interface ActionType {
  type: string;
  payload: any;
}

// User
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SAVE_UESR_LOGIN_STATUS = 'SAVE_USER_LOGIN_STATUS';

// Post
export const GET_ALL_POST_REQUEST = 'GET_ALL_POST_REQUEST';
export const GET_ALL_POST_SUCCESS = 'GET_ALL_POST_SUCCESS';
export const GET_ALL_POST_FAILURE = 'GET_ALL_POST_FAILURE';

export const GET_ONE_POST_REQUEST = 'GET_ONE_POST_REQUEST';
export const GET_ONE_POST_SUCCESS = 'GET_ONE_POST_SUCCESS';
export const GET_ONE_POST_FAILURE = 'GET_ONE_POST_FAILURE';

export const SELECT_ONE_POST = 'SELECT_ONE_POST';
