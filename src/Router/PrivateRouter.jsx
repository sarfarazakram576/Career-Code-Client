import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
const {loading, user}= use(AuthContext)
const location = useLocation()

if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
}
if(!user){
  return  <Navigate to='/signIn' state={location.pathname}></Navigate>
}

    return children
};

export default PrivateRouter;