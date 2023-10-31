import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/userState';

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // click call api for login and password, if ok, go to userPage and dispatch 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("An error occurred while signing in.");
      }
      const data = await response.json();
     
      const token = data.body.token;
      dispatch(loginSuccess(token, data.body.username));
      navigate('/user');
    } catch (error) {
      setError("Invalid email or password. Please try again."); // defined error authentification
      console.error(error);
    }
  };

  return (
    <div>
      {error && <div className="error-message">{error}</div>} {/* error */}
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
    </div>
  );
}

export default Form;
