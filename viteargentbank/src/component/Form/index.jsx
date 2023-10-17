import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFail } from '../../Services/userState'; // Importez les actions

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(email, password);

      // Mettez à jour le Redux store avec le token et marquez la connexion comme réussie
      dispatch(loginSuccess(token));
    } catch (error) {
      // En cas d'échec de connexion, stockez l'erreur dans le Redux store
      dispatch(loginFail(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
