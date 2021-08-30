import { SIGN_UP, LOG_IN, LOG_OUT } from "./type";

const dummyUser = {
  id: 1,
  nickname: 'Lee',
  Posts: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  user: {
    isLoggedIn: false,
  },
  signUpData: {},
  loginData: {},
};

export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const loginAction = data => {
  return {
    type: LOG_IN,
    data,
  };
};
export const logoutAction = {
  type: LOG_OUT
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
