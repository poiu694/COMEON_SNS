const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }
};

//

// action creator
export const logoutAction = (data) => {
  return {
    type: 'LOGOUT',
    data,
  };
};

export const loginAction = (data) => {
  return {
    type: 'LOGIN',
    data,
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: { ...state.user, isLoggedIn: true, user: action.data },
      };
    case "LOGOUT":
      return {
        ...state,
        user: { ...state.user, isLoggedIn: false, user: action.data },
      };
    default:
      return state;
  }
};

export default rootReducer;
