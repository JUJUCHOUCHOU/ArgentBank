import React, { useState } from 'react';
import { loginUser } from '../../Services/Api'; 
import { loginSuccess } from '../../Services/userAction';
import { useDispatch } from 'react-redux';
//import { Link } from 'react-router-dom';

function Form() {
  console.log('Form')
  const [userName, setUserName] = useState('');
  const [userPassWord, setUserPassWord] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Appelez la fonction loginUser pour tenter de connecter l'utilisateur
      const response = await loginUser(userName, userPassWord);
  
      // Si la connexion réussit, envoyez l'action Redux
      dispatch(loginSuccess());
      //envoyer vers la page de user
    } catch (erreur) {
      // En cas d'erreur, affichez un message d'erreur à l'utilisateur
      setMessageErreur('Identifiants incorrects. Veuillez réessayer.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userPassWord}
          onChange={(e) => setUserPassWord(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default Form;
