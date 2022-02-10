export interface IUser {
  id: number,
  img: string,
  name: string,
  score: number,
  short_desc: string,
}

export interface IData {
  id: number,
  title: string,
  label: string[],
  desc: string,
  User: IUser,
}