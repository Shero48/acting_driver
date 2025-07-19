import React from 'react'
import cancel from '../assets/cancel.png'
import { state_change } from "../slicer/search";
import { useDispatch } from 'react-redux';

const Notification = () => {
  const dispatch=useDispatch();
  return (
    <div className='w-full relative h-full bg-transparent'>
        <div className='w-1/3 h-9/11 absolute right-2 p-2 overflow-y-scroll rounded-md border-2 border-r-0'>
           <div className='z-20 sticky top-0 bg-base-100'>
            <h1 className='ml-2 text-head'>Notification</h1>
            <div onClick={()=>dispatch(state_change())} className='size-8 absolute top-2 right-2 cursor-pointer'>
              <img src={cancel} alt='cancel'/>
            </div>
           </div>
           <div className='mt-6 flex flex-col gap-2'>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
              <div className='flex flex-row justify-between border-2 rounded-xl items-center w-full h-20 gap-2 p-2'>
                <div className='flex flex-col '>
                  <p className='text-sup-head'>hii the guys are accept your booking</p>
                  <p>12-4-2025</p>
                </div>
                <p className='mr-4'>9:00 pm</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Notification
