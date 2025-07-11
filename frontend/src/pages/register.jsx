import React from 'react';
import { useState } from 'react';

const Register = () => {
    const [state,setState]=useState(true);
  return (
    <div className='w-full h-full fixed text-primary-content  bg-transparend backdrop-blur-xs flex items-center justify-center  z-60 top-0 left-0'>
      <div className={`card w-1/3 ${state==true?'h-auto text-base-content':'h-1/2 bg-base-content'} px-6 py-2   outline outline-base-content outline-offset-4`}>
        <h1 className='text-head mt-2'>{state==true?'Login':'Register'}</h1>
        <div className='card-body flex flex-col items-start -mt-4'>
            <input placeholder='Enter your name' className={`w-2/3 px-2 py-1 ${state==false?'':'hidden'} tracking-wider outline-none focus:border-b-2 border-primary`} type='text'/>
            <input placeholder='Enter your mobile' className={`w-2/3 px-2 py-1 ${state==false?'':'hidden'} tracking-wider outline-none focus:border-b-2 border-primary`} type='number'/>
            <input placeholder='Enter your email' className='w-2/3 px-2 py-1 tracking-wider  outline-none focus:border-b-2 border-primary' type='email'/>
            <input placeholder='Enter your password' className='w-2/3 px-2 py-1 tracking-wider outline-none focus:border-b-2 border-primary' type='password'/>
            <input placeholder='Enter your repassword' className={`w-2/3 px-2 py-1 ${state==false?'':'hidden'} tracking-wider outline-none focus:border-b-2 border-primary`} type='password'/>
            <button className='mx-auto mt-1 btn w-1/2 tracking-wider text-btn'>{state==true?'Login':'Register'}</button>
            <button className='mx-auto mt-1 link' onClick={()=>{setState(!state)}}>{state==true?'Register':'Login'}</button>
            <div className="after:ml-2 after:text-red-800 after:content-['*']">
              <input type='checkbox' required className='mr-2'/>
              <span className='link'>Privacy and Policy</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
