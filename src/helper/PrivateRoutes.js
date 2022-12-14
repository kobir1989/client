import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuth } from './authHelper';

export const UserPrivateRoute = () => {
    const location = useLocation();
    if (isAuth().userInfo?.role !== "USER") {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return <Outlet />;
}


export const AdminPrivateRoute = () => {
    const location = useLocation();
    if (isAuth().userInfo?.role !== "ADMIN") {
        return <Navigate to="/" state={{ from: location }} />;
    }
    return <Outlet />
}
