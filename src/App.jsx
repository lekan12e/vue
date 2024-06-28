import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StudentResultsTable from './Pages/Results';
import Profile from './Pages/Profile';

const App = ({ student, setStudent }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <Navbar isOpened={isOpened} toggle={toggle} setStudent={setStudent} />
      <div className="flex">
        <Sidebar isOpened={isOpened} student={student} />
        <div className={`top-40 transition-margin duration-300 ease-in-out ${isOpened ? 'ml-[200px]' : 'ml-0'} flex-grow`}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/results" element={<StudentResultsTable student={student} />} />
            <Route path="/profile" element={<Profile student={student} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
