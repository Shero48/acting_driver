import React, { useEffect } from 'react'
import user from '../assets/user.png';
import arrow from '../assets/arrow.png';
import right_arrow from '../assets/right_arrow.png'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Driver_list = () => {
    const {driver_list}=useSelector(state=>state.driver);
    const {search_km}=useSelector(state=> state.search)
    
  return (
    <div className='flex flex-col p-2'>
        <div className='flex sticky bg-base-100 top-0 z-40 flex-row justify-around mt-2'>
            <div className='flex flex-row items-center gap-4'>
                <span className='text-content font-semibold'>From</span>
                <img src={right_arrow} alt='way of point'/>
                <span className='text-content font-semibold'>To</span>
            </div>
            <strong className='text-head font-bold mt-1'>{search_km} KM</strong>
        </div>
        <div className='flex flex-col gap-2'>
            {driver_list?<>
                {driver_list.map((dri,item)=>(
                       <Link to={`/booking/${dri._id}`}>
                        <div key={item} className='px-10 cursor-pointer hover:shadow-xl py-1 border-2 rounded-md w-full h-16 flex flex-row items-center justify-between'>
                            <div className='flex flex-row justify-between gap-10'>
                                <img src={user} alt='user'/>
                                <div className='-ml-4'>
                                    <h2 className='text-head font-thin'>{dri.name}</h2>
                                    <p>Rating:<b>0</b></p>
                                </div>
                            </div>
                            <span className=''>₹ {(dri.price*search_km).toFixed(2)}</span>
                            <div className=' w-10 h-10'>
                                <img src={arrow} alt='arrow'/>
                            </div>
                            <div className={`${dri.active?'bg-green-900':"bg-red-900"} w-4 h-4 shadow-xl absolute top-4 right-4`}></div>
                        </div>
                        </Link> 
                ))}
            </>:<div>
                  <p>Try another near locatio</p>
                  <span>No drivers</span>
            </div>}
        </div>
    </div>
  )
}

export default Driver_list
