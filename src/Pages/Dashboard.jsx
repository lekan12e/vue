import React from 'react';

const Dashboard = ({isOpened}) => {
  return (
    <div className="w-full h-[100vh] bg-[#ECF0F5] ">
      <div className="flex flex-col -slate-600 px-5 py-7 gap-3 justify-start items-start">
        <h1 className=" font-poppins text-4xl font-[550]">Dashboard</h1>
        <h2 className='font-poppins text-2xl font-[400] pt-8'>Notifications</h2>
        <div className=' bg-[#46BE8A] w-full items-center justify-center px-10 py-3'><h4 className='font-poppins text-white text-xl font-[400]'>Current Percentage{}</h4></div>
        <div className=' bg-[#313131] w-full items-center justify-center px-10 py-3'><h4 className='font-poppins text-white text-xl font-[400]'>Current Percentage{}</h4></div>
        <div className=' bg-[#313131] w-full items-center justify-center px-10 py-3'><h4 className='font-poppins text-white text-xl font-[400]'>Current Percentage{}</h4></div>
      </div>
    </div>
  );
}

export default Dashboard;
