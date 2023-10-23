import React, { useState, useEffect } from 'react';
import Footer from '../../component/Footer/index';
import Nav from '../../component/Nav/index';
import Account from '../../component/Account/index';
import { getUserProfile, updateUserProfile } from '../../Services/index';
import { useSelector } from 'react-redux';



function User() {
  const [userProfile, setUserProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');

  const authToken = useSelector(store=>store.user.token); 

  const fetchUserProfile = async () => {
    try {
      const data = await getUserProfile(authToken);
      setUserProfile(data.body);
    } catch (error) {
      console.error('Erreur lors de la récupération des données du profil :', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedProfileData = { ...userProfile, name: updatedName };
      await updateUserProfile(authToken, updatedProfileData);
      // Réactualiser le profil après la modification
      await fetchUserProfile();
      setIsEditing(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  const { firstName, lastName, name } = userProfile;

  return (
    <div className="transaction main bg-dark">
      <main className="main bg-dark">
        <Nav />
        <div className="header">
        <h1>Welcome back {name}</h1>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <button onClick={handleSave}>Enregistrer</button>
            </div>
          ) : (
            <div>
              <button className="edit-button" onClick={handleEdit}>
                Edit Name
              </button>
            </div>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Savings (x6712)"}
          amount={"$10,928.42"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Credit Card (x8349)"}
          amount={"$184.30"}
          description={"Current Balance"}
        />
        <Footer />
      </main>
    </div>
  );
}

export default User;
