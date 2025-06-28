import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../Loader/Loader';

const PrivateRoutes = ({children}) => {
    const location=useLocation()
     const{loading,user}=useContext(AuthContext)
    if(loading){
        return <Loader></Loader>
            }
            if(user&&user?.email){
                return children
               }
    return <Navigate state={location.pathname}  to='/singIn'></Navigate>
            }
export default PrivateRoutes;