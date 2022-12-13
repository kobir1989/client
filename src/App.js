import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import UserProfile from './pages/userProfile/UserProfile';
import Admin from './pages/Admin/Admin';
import PrivateRoutes from './helper/PrivateRoutes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/profile' element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
