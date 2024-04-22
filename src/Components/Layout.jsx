import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
const Layout = ({setIsErrorTrue}) => {
  return (
    <div>
      <Navbar setIsErrorTrue={setIsErrorTrue} />
      <Outlet />
    </div>
  )
}

export default Layout
