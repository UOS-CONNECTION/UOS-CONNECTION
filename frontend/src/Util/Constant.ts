export const SHARE_INFO = {
  TALENT: 0,
  ITEM: 1,
} as const;

export const BASIC_INFO_TYPE = {
  CERTIFICATION: 0,
  GIVE: 1,
  LOCATION: 2,
  TIME: 3,
} as const;

export const EXTRA_INFO_TYPE = {
  NONE: 1000,
  CAREER: 1001,
} as const;

export const BOTTOM_HEIGHT = 1000000;

export enum LOADING {
  LIST,
  DETAIL,
}

export const ChatEvent = {
  MESSAGE: 'message',
} as const;
