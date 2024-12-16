import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { showMenu } from '../../redux/slices/sidebar.slice';

function Header() {
  const [isBg, setIsBg] = useState(false)
  const dis = useDispatch()
  let scroll = 0
  window.addEventListener("scroll", () => {
    scroll = window.scrollY
    if (scroll > 170) {
      setIsBg(true)
    } else {
      setIsBg(false)
    }
  })


  return (
    <div
      className={`fixed z-50 w-full flex items-center justify-between px-10 text-blue-300 p-3 
      ${isBg ? 'bg-black transition duration-500 ' : 'bg-transparent'}`}>
      <Link className='text-2xl font-bold'>Northwind</Link>
      <IoMenu className='sm:hidden' onClick={() => dis(showMenu(true))} />
      <ul className='gap-5 hidden sm:flex'>
        <Link to={'/'} className='hover:text-blue-600'>Ev</Link>
        <Link to={'/companies'} className='hover:text-blue-600'>Şirkətlər</Link>
        <Link to={'/add'} className='hover:text-blue-600'>Qur</Link>
        <Link to={'/saved'} className='hover:text-blue-600'>Saved</Link>
      </ul>
     
    </div>
  )
}

export default Header