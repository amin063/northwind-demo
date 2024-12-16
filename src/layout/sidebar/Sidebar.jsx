import React from 'react'
import { Link } from 'react-router-dom'
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../redux/slices/sidebar.slice';

function Sidebar() {
    const dis = useDispatch()
    const isMenu = useSelector((state) => state.sidebar) 
    console.log(isMenu);
    
    return (
        <div className={`fixed z-50 ${isMenu ? 'flex flex-col': 'hidden' } h-full w-72 gap-5 right-0 bg-gradient-to-b from-gray-800 to-black p-5`}>
            <div className='flex justify-between items-center'>
                <Link className='text-2xl font-extrabold text-blue-400 hover:text-blue-500 transition-all duration-200'>Northwind</Link>
                <TiDelete onClick={()=> dis(showMenu(false)) } className='text-3xl text-blue-500 cursor-pointer hover:text-blue-400 transition-all duration-200' />
            </div>
            <ul className='flex flex-col text-xl gap-5 mt-10'>
                <Link to={'/'} className='text-white hover:text-blue-400 transition-all duration-200'>Ev</Link>
                <Link to={'/companies'} className='text-white hover:text-blue-400 transition-all duration-200'>Şirkətlər</Link>
                <Link to={'/add'} className='text-white hover:text-blue-400 transition-all duration-200'>Qur</Link>
                <Link to={'/saved'} className='text-white hover:text-blue-400 transition-all duration-200'>Saved</Link>
            </ul>
        </div>
    )
}

export default Sidebar;
