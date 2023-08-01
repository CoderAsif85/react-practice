import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuthenticate = () => {
    return true;
}


const PrivateRoute = () => {
    const isAutheticate = useAuthenticate();
    return isAutheticate ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute;