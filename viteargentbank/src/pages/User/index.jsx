import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../Services/Api'; 
import Footer from "../../component/Footer";
import Nav from "../../component/Nav";
import { useSelector } from 'react-redux';

function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  // Accédez à l'état d'authentification depuis Redux
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    console.log('Fetching user profile for userId:', userId);

    // Vérifiez si l'utilisateur est connecté avant de récupérer les données
    if (isAuthenticated) {
      getUserProfile(userId)
        .then((data) => {
          console.log('User data received:', data);
          setUserData(data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des données du profil :', error);
        });
    }
  }, [userId, isAuthenticated]); // Ajoutez isAuthenticated comme dépendance

  console.log('Rendering User component with userData:', userData); 

  return (
    <main className="main bg-dark">
      <Nav />
      <div className="header">
        {userData ? (
          <h1>Welcome back<br />{userData.username}!</h1>
        ) : (
          <h1>Loading...</h1>
        )}
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {isAuthenticated && userData ? (
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">${userData.checkingBalance}</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ) : null}
      {isAuthenticated && userData ? (
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">${userData.savingsBalance}</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ) : null}
      {isAuthenticated && userData ? (
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">${userData.creditCardBalance}</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ) : null}
      <Footer />
    </main>
  );
}

export default User;
