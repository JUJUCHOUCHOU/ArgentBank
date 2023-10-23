import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage/index.jsx';
import SignIn from '../src/pages/SignIn/index.jsx';
import NotFound from '../src/pages/NotFound/index.jsx';
import User from './pages/User/index.jsx';
import './app.css';
import { Provider } from 'react-redux';
import store from '../src/store/store.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
