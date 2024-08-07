import React from 'react'

const Profile = ({ student }) => {
  return (
    <div className='flex flex-col w-full items-start mx-36 mt-6'>
      <h1 className='font-poppins text-[40px] text-[#032B56] font-semibold '>Profile</h1>
      <p className='font-poppins text-[#35435E] text-[20px]'>Students General Information</p>
      <div className='bg-[#021436] w-full gap-14 p-24 rounded-2xl items-center justify-center flex '>
        <div className='flex items-center justify-center rounded-full overflow-hidden lg:w-72 sm:w-52 lg:h-72 sm:h-52 bg-fuchsia-200'>
            <img className='w-full h-full object-cover' src={student.picture} alt={student.name} />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-poppins font-normal text-[36px] text-white'>Name: <span className='font-bold'>{student.name}</span></h1>
            <h1 className='font-poppins font-normal text-[36px] text-white'>Class: <span className='font-bold'>{student.class}</span></h1>
            <h1 className='font-poppins font-normal text-[36px] text-white'>Email: <span className='font-bold'>{student.email}</span></h1>
            <h1 className='font-poppins font-normal text-[36px] text-white'>Specilization: <span className='font-bold'>{student.specilization}</span></h1>
          </div>
      </div>
    </div>

  )
}

export default Profile

