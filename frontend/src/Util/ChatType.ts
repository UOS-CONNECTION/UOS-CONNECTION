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
