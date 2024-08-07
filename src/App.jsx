import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';
import StudentResultsTable from './Pages/Results';
import Profile from './Pages/Profile';

const App = ({ student, setStudent }) => {

  return (
    <div className=' flex flex-col'>
      <Navbar setStudent={setStudent} />
      <div className="flex">
          <Routes>
            <Route path="/dashboard" element={<Dashboard student={student} />} />
            <Route path="/results" element={<StudentResultsTable student={student} />} />
            <Route path="/profile" element={<Profile student={student} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
