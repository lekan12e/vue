import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PopUp from "../pop ups/AccountSettings"

function Navbar({toggle}) {
  const [popUp, popDown] = React.useState(false)
  const togglePopUp = () => {
    popDown(!popUp)
  }  
  console.log(popUp)

  return (
    <nav className='flex h-[70px] sticky top-0 z-20 w-full items-center shadow-sm bg-white'>
      <div className='ml-10 mr-5 items-center justify-center p-4'>
        <h1 className='text-2xl font-poppins text-center font-normal uppercase'>Result Checker</h1>
      </div>
      <div className='flex-1 flex justify-between items-center'>
        <div>
          <MenuIcon className=' hover:text-white w-7 h-7 text-blue-700 cursor-pointer' onClick={toggle} />
        </div>
        <div className='mr-4'>
          <AccountBoxIcon sx={{ height: "30px", width: "30px", color: '#4b5543',  cursor: "pointer", borderRadius: "90px"}} onClick = {togglePopUp} />
        </div>
      </div>
      {popUp && <PopUp />}
    </nav>
  );
}

export default Navbar;
