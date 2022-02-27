import { Navigate, Route, Routes } from 'react-router-dom';

function PrivateRoute({children, ...otherProps}) {
    const isAuthenticated = localStorage.getItem('authenticated');
    return ( 
        isAuthenticated ? children : <Navigate to='/'/>
     );
}

export default PrivateRoute;
