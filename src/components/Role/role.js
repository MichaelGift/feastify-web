import React from 'react'
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({element: Element, roles }) => {
const token = sessionStorage.getItem('Token')
const userRole = sessionStorage.getItem('role');

if (!token) {
    return <Navigate to="/login" />;
    }

    if (roles && !roles.includes(userRole)) {
    return <Navigate to="/unauthorized" />; // Unauthorized page
    }

    return <Element />;
};
    
export default RoleBasedRoute;

