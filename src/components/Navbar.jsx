import { data } from "../constants4/data";
import * as Icons from '@mui/icons-material';
import { Link } from 'react-router-dom';
import menu from '../assets/Xbox-Menu.png';
import menuWhite from '../assets/Xbox-Menu-white.png';
import React from "react"
import { useNavigate } from "react-router-dom";
import headerLogo from "../assets/education-logo-template 1.png"

function Navbar(setStudent) {
  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent sx={{width: "90px", height: "90px"}} /> : null;
  }
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };
  console.log(setStudent)
  const [isOpened, setIsOpened] = React.useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };
  
  return (
    <div className='flex gap-[237px] justify-center'>
      <div onClick={toggle} className='left-16 top-28 absolute cursor-pointer'>
        <img className='w-24' src={menu} alt="menu-icon" />
      </div>
      <div className={`absolute flex  flex-col items-center justify-between w-full h-[100vh] bg-[#35435E] ${isOpened ? "block" : "hidden"} text-black transition-width duration-300 ease-in-out z-20 overflow-hidden`}>
        <div className='left-16 top-28 absolute cursor-pointer'>
          <img onClick={toggle} className='w-24' src={menuWhite} alt="menu-icon" />
        </div>
          <div className="flex flex-col gap-4 items-center justify-center mt-24">
            {data.nav.map((nav) => (
              <Link className='hover:text-violet-900 flex flex-row gap-8 items-center justify-start ml-5 mt-10 text-[white]' onClick={toggle} key={nav.name} to={nav.link}>
                <div>{getIconComponent(nav.icon)}</div>
                <h1 className='font-poppins font-semibold tracking-wider text-[54px]'>{nav.name}</h1>
              </Link>
            ))}
          </div>
          <div className="py-3 px-8 rounded-2xl bg-white font-poppins mb-14 font-bold text-[30px]">
            <button onClick={handleLogout}>logout <Icons.Logout sx={{width: "30px", height: "30px"}} /> </button>
          </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-28">
        <img src={headerLogo} className='w-[800px] h-[200px]' alt="" />
        <h1 className='font-poppins text-[#042b56] text-center text-8xl font-[2000] tracking-wider'>Proop Secondary School</h1>
      </div>
    </div>
  );
}

export default Navbar;
