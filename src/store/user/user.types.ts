export enum USER_ACTION_TYPE {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START = "user/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "user/EMAIL_SIGN_IN_START",
  EMAIL_SIGN_UP_START = "user/EMAIL_SIGN_UP_START",
  EMAIL_SIGN_UP_SUCCESS = "user/EMAIL_SIGN_UP_SUCCESS",
  EMAIL_SIGN_UP_FAILED = "user/EMAIL_SIGN_UP_FAILED",
  SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "user/SIGN_IN_FAILED",
  SIGN_OUT_START = "user/SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED",
}

export type User = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
};

export type AdditionalUserDetails = {
  [key: string]: string;
};
