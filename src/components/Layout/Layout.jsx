import React from 'react'
import Header from '../Header/Header'
import Home from '../../Pages/Home/Home'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
   <>
   <Header/>
    <Outlet/>
   </>
  )
}

export default Layout