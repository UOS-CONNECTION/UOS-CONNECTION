export interface IUser {
  id: number;
  img: string;
  name: string;
  score: number;
  short_desc: string;
  basic_info: IInfomation[];
  extra_info: IInfomation[];
}

export interface IData {
  id: number;
  title: string;
  label: string[];
  desc: string;
  img: string;
  User: IUser;
}

export interface IInfomation {
  id: number;
  type: number;
  info: string;
}

export interface ChatType {
  id: number;
  User: UserType;
  unwatched: number;
  last: string;
  overview?: string;
  content?: (string | number)[][];
}

interface UserType {
  id: number;
  img: string | null;
  nickname: string;
}
