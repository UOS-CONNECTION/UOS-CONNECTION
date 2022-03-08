import { IData } from '../../Util/Type';
import requestAPI from '../../Util/Request';
import {
  GET_ALL_POST_REQUEST,
  GET_ONE_POST_REQUEST,
  SELECT_ONE_POST,
} from '../type';

/**
 * 서버로부터 포스트의 데이터를 모두 받습니다.
 * TODO: 나중에 페이지가 생기면 백엔드와 연동해서 사용해야 합니다.
 * @returns InfoCard Datas from server
 */
export const getAllPost = async () => {
  const res = await requestAPI.get('/api/post');

  return {
    type: GET_ALL_POST_REQUEST,
    payload: res,
  };
};

/**
 * 메인 화면에서 포스트카드를 클릭할 시 정보를 저장합니다.
 * @returns PostCard Data
 */
export const selectOnePost = (postInfo: IData) => {
  return {
    type: SELECT_ONE_POST,
    payload: postInfo,
  };
};

export const getOnePost = async (postId: number) => {
  const res = await requestAPI.get(`/api/post/${postId}`);

  return {
    type: GET_ONE_POST_REQUEST,
    payload: res,
  };
};
