import React, { useState, useEffect } from 'react';
import Nav from '../../component/Nav/index';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../../store/userState';
import { getUserProfile, updateUserProfile } from '../../Services/index';
import { useNavigate } from 'react-router-dom';

function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

function User() {
  const [userProfile, setUserProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserName, setUpdatedUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authToken = useSelector((store) => store.user.token);

  const fetchUserProfile = async () => {
    try {
      const data = await getUserProfile(authToken);
      setUserProfile(data.body);
      // Mise à jour du nom d'utilisateur dans le Redux Store
      dispatch(updateUserName(data.body.userName));
    } catch (error) {
      console.error('Erreur lors de la récupération des données du profil :', error);
    }
  };

  useEffect(() => {
    // is execute when data change ( like username )
    if(authToken){
    //Function to get user data 
    fetchUserProfile();
    }else{
    navigate('/SignIn');
    }  
  }, [authToken]);

  const handleEdit = () => {
    setIsEditing(true);
  };

 
  const handleSave = async () => {
    try {
      const updatedProfileData = { ...userProfile, userName: updatedUserName };
      const response = await updateUserProfile(authToken, updatedProfileData);

      if (response.status === 200) {
        // maj username on redux store
        dispatch(updateUserName(updatedUserName));
        setIsEditing(false);
      } else {
        console.error('Erreur lors de la mise à jour du profil :', response);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  const { firstName, lastName } = userProfile;
  const userName = useSelector((store) => store.user.userName);

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
              <button className="edit-button" onClick={handleSave}>
                Enregistrer
              </button>
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
