import React, { useState } from 'react'
import book from '../assets/book.png';
import User from '../assets/user.png';
import exit from '../assets/exit.png';
import home from '../assets/home.png';
import setting from '../assets/setting.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clear, logout } from '../slicer/user';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [show,setshow]=useState(false);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function exite(){
    dispatch(logout())
    dispatch(clear());
    navigate('/auth')
  }
  return (
    <div onClick={()=>setshow((e)=>!e)} className={`w-auto h-auto text-base-100 px-2 py-4 flex flex-col items-start justify-between gap-6 bg-base-content mt-20 ms-4 fixed rounded-md`}>
      <Link to='/profile'>
        <div className={`flex ${show?'mx-10 mt-4':''} items-center cursor-pointer flex-col`}>
        <img className='w-10 h-10 p-1'  src={User} alt='profile'/>
        {show?<h1>Name</h1>:''}
      </div>
      </Link>
      <Link to='/'>
        <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-1 ' src={home} alt='home'/>
        {show?<h1>Home</h1>:''}
      </div>
      </Link>
      <Link to='/list'>
        <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-1  border-base-100' src={book} alt='booking'/>
        {show?<h1>Booking</h1>:''}
      </div>
      </Link>
      <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-1  border-base-100' src={setting} alt='setting'/>
       {show?<h1>Setting</h1>:''}
      </div>
      <div onClick={exite} className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-2  border-base-100' src={exit} alt='exit'/>
        {show?<h1>Logout</h1>:''}
      </div>
    </div>
  )
}

export default Sidebar
