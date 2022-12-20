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
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import axios from 'axios';
import Payment from './pages/placeOrder/Payment';
import AddressForm from './pages/placeOrder/AddressForm';
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
               <Route path='/place-order' element={<PlaceOrder />}>
                  <Route path="/place-order/address" element={<AddressForm />}/>
                  <Route path="/place-order/payment" element={<Payment />}/>
               </Route>
            </Route>
         </Routes>
      </ContextProvider>

   );
}

export default App;
