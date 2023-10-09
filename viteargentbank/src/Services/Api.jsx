const BASE_URL = 'http://localhost:3001/api/v1'; 
// Requête POST pour la connexion
export const loginUser = async (email, password) => { 
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), 
    });

    if (!response.ok) {
      throw new Error('La requête a échoué.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Requête POST pour l'inscription
export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('La requête a échoué.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Requête PUT pour la mise à jour du profil utilisateur
export const updateUserProfile = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('La requête a échoué.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('La requête a échoué.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};