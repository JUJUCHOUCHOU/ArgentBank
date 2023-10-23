const BASE_URL = 'http://localhost:3001/api/v1';

export async function getUserProfile(authToken) {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données du profil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserProfile(authToken, updatedProfileData) {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfileData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du profil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}