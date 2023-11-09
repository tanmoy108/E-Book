import React from 'react'
import Signup from '../features/Signup/Signup'
import { Navigate } from 'react-router-dom'

const SignupPage = () => {
  const userToken = localStorage.getItem("token");
  return (
    <>
      {userToken && <Navigate to="/" replace={true} />}
      <Signup/>
    </>
  )
}

export default SignupPage