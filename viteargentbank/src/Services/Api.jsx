const BASE_URL = 'http://localhost:3001/api/v1';

export const signupUser = async (userData, dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      dispatch(loginFail(error.message)); // Dispatch en cas d'échec
      return;
    }

    const data = await response.json();
    dispatch(loginSuccess(data.token)); // Dispatch en cas de succès
  } catch (error) {
    dispatch(loginFail(error.message)); // Dispatch en cas d'erreur
  }
};

export const updateUserProfile = async (userData, dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Incluez le token d'authentification
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      dispatch(loginFail(error.message)); // Dispatch en cas d'échec
      return;
    }

    const data = await response.json();
    dispatch(loginSuccess(data.token)); // Dispatch en cas de succès
  } catch (error) {
    dispatch(loginFail(error.message)); // Dispatch en cas d'erreur
  }
};


