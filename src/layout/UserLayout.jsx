import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'

function UserLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default UserLayout