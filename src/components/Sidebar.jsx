import React from 'react';
import { data } from "../constants4/data";
import * as Icons from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar({ isOpened }) {
  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  }

  return (
    <div className={`fixed top-[75px] left-0 h-full bg-[#fff] text-black transition-width duration-300 ease-in-out z-20 ${isOpened ? 'w-[200px]' : 'w-0'} overflow-hidden`}>
      {data.nav.map((nav) => (
          <Link className=' hover:text-violet-900 flex flex-row gap-4 items-center justify-start ml-5 mt-10 text-black' key={nav.name} to={nav.link}>
            <div>{getIconComponent(nav.icon)}</div>
            <h1 className='font-poppins font-normal text-xl'>{nav.name}</h1>
          </Link>
      ))}
    </div>
  );
}

export default Sidebar;
