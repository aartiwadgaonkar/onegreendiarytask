import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetails';
import UserAdd from './pages/UserAdd';
// import UserList from './pages/UserList';
// import UserDetail from './pages/UserDetail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserAdd />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
