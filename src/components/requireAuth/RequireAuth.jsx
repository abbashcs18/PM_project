import React from 'react'
import {useLocation, Navigate, Outlet} from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'

function RequireAuth() {
    const {auth} = UseAuth();
    const location = useLocation()
  return (
    auth?.user
    ? <Outlet/>
    : <Navigate to="/" state={{from: location}} replace />
  )
}

export default RequireAuth