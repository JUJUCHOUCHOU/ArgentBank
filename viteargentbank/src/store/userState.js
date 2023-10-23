const initialState = {
  isAuthenticated: false,
  token: null,
  userId: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export const loginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};

export const loginFail = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};