// Fonction pour stocker le token d'authentification dans localStorage
const storeAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

const BASE_URL = 'http://localhost:3001/api/v1';

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data.token;
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
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Incluez le token d'authentification
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Gérez les erreurs de manière appropriée
      if (response.status === 401) {
        throw new Error('Authentification échouée. Veuillez vous reconnecter.');
      } else if (response.status === 403) {
        throw new Error('Accès refusé.');
      } else {
        throw new Error('Erreur inconnue.');
      }
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
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Incluez le token d'authentification
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Gérez les erreurs de manière appropriée
      if (response.status === 401) {
        throw new Error('Authentification échouée. Veuillez vous reconnecter.');
      } else if (response.status === 403) {
        throw new Error('Accès refusé.');
      } else if (response.status === 404) {
        throw new Error('Utilisateur non trouvé.');
      } else {
        throw new Error('Erreur inconnue.');
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Requête GET pour récupérer le profil utilisateur
export const getUserProfile = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Incluez le token d'authentification
      },
    });

    if (!response.ok) {
      // Gérez les erreurs de manière appropriée
      if (response.status === 401) {
        throw new Error('Authentification échouée. Veuillez vous reconnecter.');
      } else if (response.status === 403) {
        throw new Error('Accès refusé.');
      } else if (response.status === 404) {
        throw new Error('Utilisateur non trouvé.');
      } else {
        throw new Error('Erreur inconnue.');
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
