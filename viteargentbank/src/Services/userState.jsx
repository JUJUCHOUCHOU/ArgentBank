const initialState = {
  isAuthenticated: false, // L'utilisateur n'est pas connecté par défaut
  };

/**
 * Action 'LOGIN_SUCCESS':
 * Cette action est dispatchée lorsque l'utilisateur se connecte avec succès.
 * Elle met à jour l'état de connexion en passant isAuthenticated à true.
 * Cela permet de suivre l'état de connexion de l'utilisateur dans l'application.
 */
export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};
/**
 * Action 'LOGIN_FAILURE':
 * Cette action est dispatchée lorsque la connexion de l'utilisateur échoue.
 * Elle peut être utilisée pour afficher un message d'erreur à l'utilisateur
 * ou pour effectuer d'autres actions en cas d'échec de connexion.
 */
export const loginFail = () => {
  return {
    type: 'LOGIN_FAILURE',
  };
};
/**
 * Réducteur 'userReducer':
 * Ce réducteur gère l'état de connexion de l'utilisateur.
 * Il commence avec un état initial où isAuthenticated est défini sur false.
 * Lorsqu'il reçoit l'action 'LOGIN_SUCCESS', il met à jour isAuthenticated à true,
 * indiquant que l'utilisateur est connecté. En cas d'action 'LOGIN_FAILURE' ou 'LOGOUT',
 * isAuthenticated est défini sur false, indiquant que l'utilisateur est déconnecté.
 * Pour toutes les autres actions, il renvoie simplement l'état actuel.
 */
export const userReducer = (state = initialState, action) => {
switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      isAuthenticated: true,
    };
  case 'LOGIN_FAILURE':
  case 'LOGOUT':
    return {
      ...state,
      isAuthenticated: false,
    };
  default:
    return state;
}
};

