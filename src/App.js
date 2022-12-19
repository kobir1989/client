import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import UserProfile from './pages/userProfile/UserProfile';
import Admin from './pages/Admin/Admin';
import { AdminPrivateRoute } from './helper/PrivateRoutes';
import { UserPrivateRoute } from './helper/PrivateRoutes';
import ContextProvider from './store/ContextProvider';
import ShopingCart from './pages/shopingCart/ShopingCart';
import axios from 'axios';
axios.defaults.withCredentials = true;
const App = () => {
   return (
      <ContextProvider>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route element={<AdminPrivateRoute />}>
               <Route path='/admin' element={<Admin />} />
            </Route>
            <Route element={<UserPrivateRoute />}>
               <Route path='/profile' element={<UserProfile />} />
               <Route path="/shoping-cart" element={<ShopingCart />} />
            </Route>
         </Routes>
      </ContextProvider>

   );
}

export default App;
