import React, { useState, useEffect } from 'react';
import Nav from '../../component/Nav/index';
import Account from '../../component/Account/index';
import { getUserProfile, updateUserProfile } from '../../Services/index';
import { useSelector } from 'react-redux';
import dataUser from './data';

function User() {
  const [userProfile, setUserProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserName, setUpdatedUserName] = useState('');

  const authToken = useSelector(store => store.user.token);

  // Déclaration de la fonction fetchUserProfile en dehors de useEffect
  const fetchUserProfile = async () => {
    try {
      const data = await getUserProfile(authToken);
      setUserProfile(data.body);
    } catch (error) {
      console.error('Erreur lors de la récupération des données du profil :', error);
    }
  };

  useEffect(() => {
    // Appel de fetchUserProfile à l'intérieur de useEffect
    fetchUserProfile();
  }, [authToken]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedProfileData = { ...userProfile, userName: updatedUserName };
      const response = await updateUserProfile(authToken, updatedProfileData);
  
      if (response.status === 200) {
        console.log('Réponse de l\'API après la mise à jour :', response.body);
        await fetchUserProfile();
        setIsEditing(false);

      } else {
        console.error('Erreur lors de la mise à jour du profil :', response);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };
  

  const { firstName, lastName, userName } = userProfile;

  return (
    <div className="transaction main bg-dark">
      <main className="main bg-dark">
        <Nav />
        <div className="header">
          <h1>Welcome back {firstName + ' ' + lastName + ' ' + userName}</h1>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedUserName}
                onChange={(e) => setUpdatedUserName(e.target.value)}
              />
              <button className="edit-button" onClick={handleSave}>Enregistrer</button>
            </div>
          ) : (
            <div>
              <button className="edit-button" onClick={handleEdit}>
                Edit Username
              </button>
            </div>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {dataUser.map((data, index) => (
          <Account
            key={index}
            title={data.title}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </main>
    </div>
  );
}

export default User;
