import React from 'react';
import logo from '../../assets/Logo.png';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/userState';

function Nav() {
  const dispatch = useDispatch();
  const authToken = useSelector((store) => store.user.token);
  const userName = useSelector((store) => store.user.userName);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const displayUserName = userName || 'Unknown';

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Logo d'Argent Bank" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {authToken ? (
          <div>
            <div onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>
              Sign Out
            </div>
            <div className="main-nav-item main-nav-logo">
              <i className="fa fa-user-circle"></i>
              {displayUserName}
            </div>
          </div>
        ) : (
          <Link to="/signIn">
            <div>
              <i className="fa fa-user-circle"></i>
              Sign In
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
