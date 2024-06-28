import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { students } from '../constants4/data';

const Login = ({ setStudent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = students.find((student) => student.email === email && student.password === password);
    if (user) {
      const loginTimestamp = Date.now();
      const userData = { ...user, loginTimestamp };
      setStudent(userData);
      localStorage.setItem('student', JSON.stringify(userData));
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen w-full bg-gradient-to-t from-purple-600 to-blue-600">
      <div className='absolute top-32 md:top-48'>
        <h1 className='uppercase font-extrabold text-4xl md:text-7xl text-gray-50 font-poppins'>result checker</h1>
      </div>
      <h1 className="text-2xl md:text-4xl font-poppins text-gray-100 mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 font-poppins text-lg md:text-xl px-8 py-2 w-80 md:w-96 h-12 md:h-16 outline-none border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 font-poppins text-lg md:text-xl px-8 py-2 w-80 md:w-96 h-12 md:h-16 outline-none border rounded"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    </div>
  );
};

export default Login;
