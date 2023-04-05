import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AddictionForm from './pages/AddictionForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addictionForm" element={<AddictionForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
