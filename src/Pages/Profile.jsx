import React from 'react'

const Profile = ({ student }) => {
  console.log(student)
  return (
    <div className='w-full h-[100vh] bg-[#ECF0F5] '>
      <div className='flex flex-col -slate-600 px-5 py-7 gap-3 items-start'>
        <h1 className='font-poppins text-4xl font-[550]'>Profile</h1>
        <div className='flex flex-col items-center justify-center gap-2 bg w-full p-5 rounded-lg'>
          <div className="flex flex-col items-center w-80 h-80 rounded-md p-5 justify-center">
            <div className='flex items-center justify-center rounded-full overflow-hidden w-52 h-52 bg-fuchsia-200'>
              <img className='w-full h-full object-cover' src={student.picture} alt={student.name} />
            </div>
            <h1 className='font-poppins text-xl font-[550]'>{student.name}</h1>
            <h2 className='font-poppins text-xl font-[550]'>{student.class}</h2>
            <h3 className='font-poppins text-xl font-[550]'>{student.email}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile