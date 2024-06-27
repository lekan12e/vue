import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Dashboard from './Pages/Dashboard';
import StudentResultsTable from './Pages/Results';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import './index.css';

const Main = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('student'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setStudent={setLoggedInUser} />} />
        <Route path="*" element={loggedInUser ? <App student={loggedInUser} setStudent={setLoggedInUser} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
