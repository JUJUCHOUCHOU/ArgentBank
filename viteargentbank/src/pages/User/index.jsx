import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../component/Footer/index';
import Nav from '../../component/Nav/index';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../Services/Api';
import Account from '../../component/Account/index';

function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    console.log('Fetching user profile for userId:', userId);

    if (isAuthenticated !== undefined && isAuthenticated) {
      getUserProfile(userId) 
        .then((data) => {
          console.log('User data received:', data);
          setUserData(data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des données du profil :', error);
        });
    }
  }, [userId, isAuthenticated]);

  console.log('Rendering User component with userData:', userData);

  // Si les données de l'utilisateur ne sont pas encore disponibles, userData sera null
  if (!userData) {
    return null; // Le composant ne rend rien en attendant les données
  }

  const { firstName, lastName } = userData;

  return (
    <div className="transaction main bg-dark">
      <main className="main bg-dark">
        <Nav />
        <div className="header">
          <h1>Welcome back {firstName} {lastName}</h1>
          <button className="edit-button" onClick={submit}>
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
