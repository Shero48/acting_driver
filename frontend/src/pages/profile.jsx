import React from 'react';
import edit from '../assets/edit.png';
import user from '../assets/user.png';
import exit from '../assets/exit.png';
import verified from '../assets/verified.png';
import { useSelector ,useDispatch} from 'react-redux';
import get_time from '../utill/get_time';
import { logout } from '../slicer/user';
import {useNavigate } from 'react-router-dom';
import { clear } from '../slicer/user';

const Profile = () => {
  const {auth_user}=useSelector(state=>state.user);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function exite(){
    dispatch(logout());
    dispatch(clear());
    navigate('/auth')
  }
  return (
    <>
    {auth_user&&<div className='ml-30 mt-10 flex flex-col gap-4'>
      <div className='flex flex-row items-end'>
        <div className='w-30 relative h-30'>
            <div className='w-28 h-28 border-2 grid place-content-center rounded-xl'>
                <img src={auth_user.image||user} alt='user'/>
            </div>
            <div className='w-10 h-10 grid place-content-center absolute z-10 bg-base-100 top-0 right-0 border-2 rounded-full cursor-pointer'>
                <img className='size-4'  src={edit} alt='edit'/>
            </div>
        </div>
        {auth_user.verified&&<div className='size-10'>
            <img src={verified} alt='verfied_badge'/>
        </div>}
      </div>
      <div>
        <h1 className='text-head font-bold'>{auth_user.name}</h1>
        <span>{get_time(auth_user.createdAt)}</span>
      </div>
      <p className='text-sup-head'>{auth_user.email}</p>
      <div>
        <div className='mt-4 flex flex-row gap-6 mb-4'>
           <button className='btn hover:border-2'>Setting</button>
           <button className='btn hover:border-2'>Booking</button>
        </div>
        <div onClick={exite} className='size-10 mt-10 ml-10 cursor-pointer'>
            <img src={exit} alt='logout'/>
        </div>
      </div>
    </div>}
    </>
  )
}

export default Profile
