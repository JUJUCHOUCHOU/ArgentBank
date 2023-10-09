import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage/index.jsx';
import SignIn from '../src/pages/SignIn/index.jsx';
import NotFound from '../src/pages/NotFound/index.jsx';
import User from './pages/User/index.jsx';
import './app.css';
import { Provider } from 'react-redux';
// faire provider avec la doc react
function App() {
  return (
    <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/user/:userId" element={<User />} />{/*we have to say 'ID' for the good card path*/}
        <Route path="*" element={<NotFound />}/>{/*Last because if other pages are not found...*/}
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;