import React from 'react'
import call from '../assets/call.png';
import email from '../assets/email.png';
import user from '../assets/user.png';
import right_arrow from '../assets/right_arrow.png';
import arrow from '../assets/arrow.png';

const Booking = () => {
  return (
    <div className=' w-full h-9/10 flex justify-center'>
        <div className='w-9/10 h-4/5 mt-4 border-2 p-2 flex flex-row gap-2'>
            <div className='w-1/2 h-full flex flex-col gap-2 p-2 mt-4 ml-4 border-r-2'>
                <div className='w-20 h-20 border-2 rounded-2xl overflow-hidden grid place-content-center'>
                    <img src={user} alt='driver_img'/>
                </div>
                <div className='flex flex-col ml-2'>
                    <b className='text-head font-bold'>Name</b>
                    <span className='ml-1'>Joined date</span>
                </div>
                <div className='font-content'>
                    <p>Male</p>
                </div>
                <span className='font-thin text-sup-head'>Location</span>
                <div className='flex flex-row gap-6 mt-4 items-center'>
                    <div className='w-16 h-16 hover:w-26 hover:h-10 hover:pl-6 pt-2 pl-2 transition-all duration-300 ease-in-out cursor-pointer bg-base-100 border-2 rounded-full'>
                        <img className='m-2 w-1/2 h-1/2 hover:w-10' src={call} alt='call'/>
                    </div>
                    <div className='w-16 h-16 hover:w-26 hover:h-10 hover:pl-6 pt-2 pl-2 transition-all duration-300 ease-in-out cursor-pointer bg-base-100 border-2 rounded-full'>
                        <img className='m-2 w-1/2 h-1/2 hover:w-10' src={email} alt='email'/>
                    </div>
                </div>
                <div className='flex bg-base-100 flex-row items-center gap-6 ml-6 mt-2'>
                            <div className='flex flex-row items-center gap-4'>
                                <span className='text-content font-semibold'>From</span>
                                <img src={right_arrow} alt='way of point'/>
                                <span className='text-content font-semibold'>To</span>
                            </div>
                            <strong className='text-head font-bold mt-1'>150 KM</strong>
                        </div>
                <div className='mt-4'>
                    <button className='btn hover:border-2'>Book Now</button>
                </div>
           </div>
            <div className='w-1/2 h-full p-4'>
                <h1 className='text-head'>Comments</h1>
                <div className='w-full h-3/4 mt-2 snap-y snap-mandatory overflow-y-scroll'>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                    <div className='border-b-2 snap-start scroll-m-2 flex flex-row items-center m-2 pb-2 gap-2' >
                        <div className='w-16 h-16 border-2'>
                            <img src={user} alt='cmd_user'/>
                        </div>
                        <div>
                            <p>Comment to any queriy i want accept the comment then calm your mind</p>
                            <b>Rat:5</b>
                        </div>
                    </div>
                </div>
                <form action="" className='w-full pt-6 mt-2 h-20 gap-2 flex flex-row'>
                    <select onChange={(e)=>get_in(e)} className='w-1/3 h-1/2  dropdown text-sub-head text-center' name='rating'>
                        <option defaultValue='Rating'>Rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <input type='text' className='w-2/3 h-1/2 outline-none border-b-2 p-2' placeholder='Enter your comment' required/>
                    <button className='btn btn-outline rounded-full'><img className='w-2/3 h-2/3' src={arrow} alt='arrow'/></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Booking
