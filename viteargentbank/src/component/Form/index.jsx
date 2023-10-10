import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFail } from '../../Services/userState';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [userName, setUserName] = useState(''); //userName with useState
  const [userPassWord, setUserPassWord] = useState(''); //userPassWord with useState
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // try connect ,
      // if connect ok dispatch success
      dispatch(loginSuccess());
      navigate('/user'); 
    } catch (erreur) {
      // if connect fail dispatch loginFail
      dispatch(loginFail());
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
