import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
} from "./type";

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false, // Try Login
  isLoggingOut: false, // Try Logout
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      console.log("REDUCER_LOGIN_REQUEST")
      return {
        ...state,
        isLoggingIn: true,
        me: action.data,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        me: { ...action.data, nickname: "sangmin"},
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
        me: null,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
