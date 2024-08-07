import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginOutlined } from '@mui/icons-material';

const Login = ({ setStudent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const students = useSelector(state => state.students)

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
    <div className="flex flex-col gap-3 items-center justify-center h-screen w-full bg-login-img bg-cover ">
      <div className='absolute top-32 md:top-48'>
        <img src="../src/assets/education-logo-template 1.png" className='w-[677px] h-[171px]' alt="" />
        <h1 className='font-poppins text-[#042b56] text-center text-6xl font-extrabold tracking-wider'>Proop Secondary School</h1>
      </div>
      <div className='flex flex-col w-[520px] items-center rounded-3xl shadow-2xl gap-1 h-[350px] bg-[#d9d9d9]'>
      <h1 className="text-2xl md:text-4xl font-poppins text-[#042b56] mt-8 mb-4">Student Login</h1>
      <input
        type="email"
        placeholder="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 font-poppins text-lg md:text-xl px-8 py-2 w-96 rounded-md shadow-lg h-12 md:h-16 outline-none border-[3px] border-black rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 font-poppins text-lg md:text-xl px-8 py-2 w-96 rounded-md shadow-lg h-12 md:h-16 outline-none border border-[3px] border-black rounded"
      />
      <button onClick={handleLogin} className="px-12 mt-6 py-4 bg-[#021436] text-3xl font-poppins rounded-md text-white rounded">Login <LoginOutlined /></button>
      </div>
    </div>
  );
};

export default Login;
