import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../component/Footer/index';
import Nav from '../../component/Nav/index';
import Account from '../../component/Account/index';


function User() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Récupérez les données de l'utilisateur à l'aide de votre service ou de votre API
    // Vous devez adapter cette partie en fonction de votre backend
    // Cela suppose que vous avez une fonction getUserProfile qui renvoie les données de l'utilisateur
    getUserProfile()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données du profil :', error);
      });
  }, []);
  const updateUserProfile = async (userData, dispatch) => {
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
  const handleEdit = () => {
    // Mettez en place la logique pour mettre à jour les informations du profil de l'utilisateur
    const updatedData = /* Les données mises à jour */
    updateUserProfile(updatedData, dispatch);
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  const { firstName, lastName } = userData;

  return (
    <div className="transaction main bg-dark">
      <main className="main bg-dark">
        <Nav />
        <div className="header">
          <h1>Welcome back {firstName} {lastName}</h1>
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
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
