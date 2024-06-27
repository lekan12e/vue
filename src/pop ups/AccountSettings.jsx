import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

const AccountSettings = ({ setStudent }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('student');
    setStudent(null);
    navigate('/login');
  };

  return (
    <div className='absolute rounded-xl right-[8px] top-[49px] h-[150px] w-[250px] shadow-2xl bg-[#f7f8f8] justify-center'>
      <div className='cursor-pointer flex rounded-md mt-2 mb-2 gap-2 w-full p-4 hover:bg-slate-300'>
        <PersonIcon sx={{color: "#4B5543"}} />
        <h1 className='font-poppin font-normal text-gray-600'>Profile</h1>
      </div>
      <div className='cursor-pointer flex rounded-md gap-2 mb-2 w-full p-4 justify-start items-center hover:bg-slate-300'>
        <ManageAccountsIcon sx={{color: "#4B5543"}} />
        <h1 className='font-poppin font-normal text-gray-600'>Change Password</h1>
      </div>
      <div className='cursor-pointer flex rounded-md gap-2 w-full p-4 hover:bg-slate-300' onClick={handleLogout}>
        <LogoutIcon sx={{color: "#4B5543"}} />
        <h1 className='font-poppin font-normal text-gray-600'>Logout</h1>
      </div>
    </div>
  );
};

export default AccountSettings;
