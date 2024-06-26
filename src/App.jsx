import React, { useState } from 'react';
import Dashboard from './Pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StudentResultsTable from './Pages/Results';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="App">
      <Navbar isOpened={isOpened} toggle={toggle} />
      <div className="flex">
        <Sidebar isOpened={isOpened} />
        <div className={`top-40 transition-margin duration-300 ease-in-out ${isOpened ? 'ml-[200px]' : 'ml-0'} flex-grow`}>
          <Outlet  />
        </div>
      </div>
    </div>
  );
};

export default App;
