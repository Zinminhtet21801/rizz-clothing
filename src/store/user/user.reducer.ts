import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
// import { USER_ACTION_TYPE } from "./user.types";
import {
  emailSignInStart,
  emailSignUpFailed,
  emailSignUpStart,
  emailSignUpSuccess,
  googleSignInStart,
  // setCurrentUser,
  signOutSuccess,
  signOutStart,
  signOutFailed,
  signInSuccess,
  // checkUserSession,
  signInFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  // const { type, payload } = action;
  // switch (type) {
  //   case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
  //     return { ...state, currentUser: payload };
  //   case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
  //     return { ...state, currentUser: null };
  //   case USER_ACTION_TYPE.SIGN_OUT_FAILED:
  //   case USER_ACTION_TYPE.SIGN_IN_FAILED:
  //   case USER_ACTION_TYPE.EMAIL_SIGN_UP_FAILED:
  //     return { ...state, error: payload };
  //   default:
  //     return state;
  // }

  if (
    emailSignInStart.match(action) ||
    emailSignUpStart.match(action) ||
    googleSignInStart.match(action) ||
    signOutStart.match(action)
  ) {
    return { ...state, isLoading: true };
  }

  if (
    emailSignUpFailed.match(action) ||
    signOutFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  if (emailSignUpSuccess.match(action) || signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  return state;
};
