import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black flex flex-col gap-5 items-center justify-center  mt-20 py-10'>
      <Link className='text-2xl font-bold text-blue-300'>Northwind</Link>
      <ul className='text-white flex gap-5'>
        <Link to={'/'} className='hover:text-blue-600'>Home</Link>
        <Link to={'/companies'} className='hover:text-blue-600'>Şirkətlər</Link>
        <Link to={'/add'} className='hover:text-blue-600'>Qur</Link>
        <Link to={'/saved'} className='hover:text-blue-600'>Saved</Link>
      </ul>
    </div>
  )
}

export default Footer