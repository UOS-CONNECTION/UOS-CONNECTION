// TODO: User DTO
export interface User {}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SingUpRequest extends LoginRequest {
  nickname: string;
}
