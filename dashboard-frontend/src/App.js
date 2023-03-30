import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          {/* <Route path="/signup" element={<Signup/>} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
