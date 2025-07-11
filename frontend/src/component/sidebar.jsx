import React, { useState } from 'react'
import book from '../assets/book.png';
import User from '../assets/user.png'
import exit from '../assets/exit.png';
import home from '../assets/home.png';
import setting from '../assets/setting.png';

const Sidebar = () => {
  const [show,setshow]=useState(false);
  return (
    <div className={`w-auto h-auto text-base-100 px-2 py-4 flex flex-col items-start justify-between gap-6 bg-base-content mt-20 ms-4 fixed rounded-md`}>
      <div className={`flex ${show?'mx-10 mt-4':''} items-center cursor-pointer flex-col`}>
        <img className='w-10 h-10 p-1'  src={User} alt='profile'/>
        {show?<h1>Name</h1>:''}
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-1 ' src={home} alt='home'/>
        {show?<h1>Home</h1>:''}
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-1  border-base-100' src={book} alt='booking'/>
        {show?<h1>Booking</h1>:''}
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-1  border-base-100' src={setting} alt='setting'/>
       {show?<h1>Setting</h1>:''}
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10 p-2  border-base-100' src={exit} alt='exit'/>
        {show?<h1>Logout</h1>:''}
      </div>
    </div>
  )
}

export default Sidebar
