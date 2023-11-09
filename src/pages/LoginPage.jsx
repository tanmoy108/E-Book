import React from 'react'
import Login from '../features/Login/Login'
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const userToken = localStorage.getItem("token");
  return (
   <>
   {userToken && <Navigate to="/" replace={true} />}
      <Login />
   </>
  )
}

export default LoginPage