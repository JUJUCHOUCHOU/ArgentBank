const initialState = {
  isAuthenticated: false,
  token: null,
  userId: null,
  error: null,
  userName: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        userName: action.payload.userName,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    case 'UPDATE_USERNAME':
      return {
        ...state,
        userName: action.payload,
      };
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

export const updateUserName = (userName) => {
  return {
    type: 'UPDATE_USERNAME',
    payload: userName,
  };
};