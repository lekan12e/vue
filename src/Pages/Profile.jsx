import React from 'react'

const Profile = ({ student }) => {
  return (
    <div className='w-full min-h-screen bg-[#ECF0F5]'>
      <div className='flex flex-col text-slate-600 px-5 py-7 gap-3 items-start'>
        <h1 className='font-poppins text-2xl sm:text-4xl font-semibold'>Profile</h1>
        <div className='flex flex-col items-center justify-center gap-2 w-full p-5 rounded-lg'>
          <div className="flex flex-col items-center w-64 sm:w-80 h-64 sm:h-80 rounded-md p-5 justify-center">
            <div className='flex items-center justify-center rounded-full overflow-hidden w-40 sm:w-52 h-40 sm:h-52 bg-fuchsia-200'>
              <img className='w-full h-full object-cover' src={student.picture} alt={student.name} />
            </div>
            <h1 className='font-poppins text-lg sm:text-xl font-medium'>{student.name}</h1>
            <h2 className='font-poppins text-lg sm:text-xl font-medium'>{student.class}</h2>
            <h3 className='font-poppins text-lg sm:text-xl font-medium'>{student.email}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
