import React from 'react';

const Dashboard = ({ isOpened }) => {
  return (
    <div className="w-full min-h-screen bg-[#ECF0F5]">
      <div className="flex flex-col text-slate-600 px-5 py-7 gap-3 justify-start items-start">
        <h1 className="font-poppins text-2xl sm:text-4xl font-semibold">Dashboard</h1>
        <h2 className='font-poppins text-xl sm:text-2xl font-medium pt-8'>Notifications</h2>
        <div className='bg-[#46BE8A] w-full flex items-center justify-center px-10 py-3'>
          <h4 className='font-poppins text-white text-xl font-medium'>Current Percentage{}</h4>
        </div>
        <div className='bg-[#313131] w-full flex items-center justify-center px-10 py-3'>
          <h4 className='font-poppins text-white text-xl font-medium'>Current Percentage{}</h4>
        </div>
        <div className='bg-[#313131] w-full flex items-center justify-center px-10 py-3'>
          <h4 className='font-poppins text-white text-xl font-medium'>Current Percentage{}</h4>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
