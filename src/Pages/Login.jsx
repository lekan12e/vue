import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { students } from '../constants4/data';

const Login = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = students.find((student) => student.email === email && student.password === password);
    if (user) {
      setLoggedInUser(user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 px-4 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    </div>
  );
};

export default Login;
