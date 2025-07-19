import React from 'react'
import logo from '../assets/brn_logo.png';
import notify from '../assets/notification.png';
import { useDispatch, useSelector } from 'react-redux';
import { state_change } from "../slicer/search";

const Header = () => {
  const dispatch=useDispatch();
  const {auth_user}=useSelector(state=>state.user);
  return (
    <div className='navbar w-full h-20 bg-base-100  sticky top-0 z-30'>
       <div className='navbar-start flex flex-col -mt-2 items-start mx-4'>
         <img className='w-40 h-26' src={logo}/>
         <span className='font-thin font-custom -mt-10 mx-10 text-base-content'>MyJourny</span>
       </div>
       <div className='navbar-end gap-4 mx-6'>
          <div onClick={()=>dispatch(state_change())} className='size-8 relative cursor-pointer mr-4'>
            <img src={notify} alt='notification'/>
            <div className='w-2 h-2 rounded-full absolute top-0 right-0 bg-red-800 shadow-2xl'></div>
          </div>
        {auth_user?'':<>
        <button className='btn btn-outline btn-base-100 hover:btn-base-content hover:text-base-100 hover:btn-soft'>Login</button>
        <button className='btn btn-sfot hover:border-base-content hover:border-2'>Register</button>
        </>}
       </div>
    </div>
  )
}

export default Header
