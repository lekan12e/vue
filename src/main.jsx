import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Dashboard from './Pages/Dashboard';
import StudentResultsTable from './Pages/Results';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const Main = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('student'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
    console.log(storedUser)
  }, []);

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/login" element={<Login setStudent={setLoggedInUser} />} />
        <Route path="*" element={loggedInUser ? <App student={loggedInUser} setStudent={setLoggedInUser} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
