import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuth } from './authHelper';

const PrivateRoutes = () => {
    let location = useLocation();
    if (!isAuth()) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    if (isAuth().userInfo?.role !== "ADMIN") {
        return <Navigate to="/" state={{ from: location }} />;
    }
    return <Outlet />;
}

export default PrivateRoutes;