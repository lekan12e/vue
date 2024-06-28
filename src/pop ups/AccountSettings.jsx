import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

const AccountSettings = ({ setStudent, isPopUp }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('student');
    setStudent(null);
    navigate('/login');
  };

  return (
    <div className={`absolute rounded-xl right-2 sm:right-8 top-12 sm:top-14 shadow-2xl bg-[#f7f8f8] justify-center transition-all duration-300 ease-in-out ${isPopUp ? "w-[200px] sm:w-[250px]" : "w-0 opacity-5 bg-emerald-600"}`}>
      <Link className='cursor-pointer flex rounded-md mb-2 gap-2 w-full p-4 hover:bg-slate-300' to="/profile">
        <PersonIcon sx={{ color: "#4B5543" }} />
        <h1 className='font-poppins font-normal text-gray-600'>Profile</h1>
      </Link>
      <div className='cursor-pointer flex rounded-md gap-2 mb-2 w-full p-4 justify-start items-center hover:bg-slate-300'>
        <ManageAccountsIcon sx={{ color: "#4B5543" }} />
        <h1 className='font-poppins font-normal text-gray-600'>Change Password</h1>
      </div>
      <div className='cursor-pointer flex rounded-md gap-2 w-full p-4 hover:bg-slate-300' onClick={handleLogout}>
        <LogoutIcon sx={{ color: "#4B5543" }} />
        <h1 className='font-poppins font-normal text-gray-600'>Logout</h1>
      </div>
    </div>
  );
};

export default AccountSettings;
