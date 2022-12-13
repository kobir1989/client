import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import UserProfile from './pages/userProfile/UserProfile';
import Admin from './pages/Admin/Admin';
import { isAuth } from './helper/authHelper';

const App = () => {
  const {userInfo} = isAuth()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      {userInfo?.role === "ADMIN" && <Route path='/admin' element={<Admin />} />}
      {isAuth() && <Route path='/profile' element={<UserProfile />} />}
    </Routes>
  );
}

export default App;
