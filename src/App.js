import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users';
import UserDetail from './Pages/UserDetail';

const  App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Users />} />
      <Route exact path='/users' element={<Users />} />
      <Route exact path='/user/:userId' element={<UserDetail />} />
    </Routes>
  </BrowserRouter>
)

export default App;
