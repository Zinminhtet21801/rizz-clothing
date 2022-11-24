import {
  Action,
  ActionWithPayload,
  createAction,
  withMatchers,
} from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.types";
import {
  AdditionalInformation,
  UserData,
} from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>;
export type GoogleSignInStart = Action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPE.EMAIL_SIGN_IN_START,
  {
    email: string;
    password: string;
  }
>;

export type EmailSignUpStart = ActionWithPayload<
  USER_ACTION_TYPE.EMAIL_SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPE.SET_CURRENT_USER,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_IN_FAILED,
  Error
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_IN_SUCCESS,
  UserData
>;

export type EmailSignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPE.EMAIL_SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type EmailSignUpFailed = ActionWithPayload<
  USER_ACTION_TYPE.EMAIL_SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPE.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPE.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatchers(
  (): CheckUserSession => createAction(USER_ACTION_TYPE.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatchers(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatchers(() =>
  createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatchers(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password })
);

export const emailSignUpStart = withMatchers(
  (email: string, password: string, displayName: string): EmailSignUpStart =>
    createAction(USER_ACTION_TYPE.EMAIL_SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const emailSignUpSuccess = withMatchers(
  (user: User, additionalDetails: AdditionalInformation): EmailSignUpSuccess =>
    createAction(USER_ACTION_TYPE.EMAIL_SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    })
);

export const emailSignUpFailed = withMatchers(
  (error: Error): EmailSignUpFailed =>
    createAction(USER_ACTION_TYPE.EMAIL_SIGN_UP_FAILED, error)
);

export const signInSuccess = withMatchers(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatchers(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error)
);

export const signOutStart = withMatchers(
  (): SignOutStart => createAction(USER_ACTION_TYPE.SIGN_OUT_START)
);

export const signOutSuccess = withMatchers(
  (): SignOutSuccess => createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatchers(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error)
);
