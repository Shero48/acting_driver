import React, { useState } from 'react'
import user from '../assets/user.png';
import right_arrow from '../assets/right_arrow.png';
import arrow from '../assets/arrow.png';
import call from '../assets/call.png';
import email from '../assets/email.png';
import cancel from '../assets/cancel.png';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { booking_list, rating } from '../slicer/driver';
import get_time from '../utill/get_time';

const Booking_list = () => {
    const [select,setselect]=useState([]);
    const dispatch=useDispatch();
    const [rat,setrat]=useState();
    const [cmd,setcmd]=useState();
    const [show,setshow]=useState(false);
    const [rated,setrate]=useState(false);
    const [btn,setbtn]=useState();
    const {order_list}=useSelector(state=>state.driver);
    useEffect(()=>{
        async function name () {
            const value=await dispatch(booking_list());
        }
        name()
    },[btn]);
    const find=(id)=>{
        if(order_list.length){
            setselect(order_list.filter(val=>val._id==id));
        }
    }
    const rate=async(e,data,id)=>{
        e.preventDefault();
        setbtn(true)
        try{
            if(data&&id){
                const value=await dispatch(rating({data,id}));
                if(value.payload==true||value){
                    setbtn(false)
                }
                setcmd('');
            }
        }catch(err){
            console.log(err);
        }
    }
    function showbtn(){
        setshow((e)=>!e)
        if(select){
                select[0].driver.rating.map(val=>{
                if(val.user==select[0].user._id){
                    setrate(true);

                }
            })
            }
    }
  return (
    <div className='w-9/10 h-8/10 mt-2 flex ml-20 px-4 py-2 flex-row border-2'>
      <div className={`w-2/7 ${select.length>0?'border-r-2':''} pr-2 overflow-y-scroll`}>
        {order_list.length?<>
            {order_list.map((val,item)=>(
                <div onClick={()=>find(val._id)} key={item} className='px-10 mb-2 cursor-pointer hover:shadow-xl py-1 border-2 rounded-md w-full h-16 flex flex-row items-center justify-between'>
                    <div className='flex flex-row justify-between gap-10'>
                        <img src={val.user.image||user} alt='user'/>
                        <div className='-ml-4'>
                        <h2 className='text-head font-thin'>{val.driver.name}</h2>
                        <p>{val.book_info.time}</p>
                        </div>
                    </div>
                    <span className=''>{val.book_info.amount}</span>
                    <div className=' w-10 h-10'>
                        <img src={arrow} alt='arrow'/>
                    </div>
                </div>
            ))}
        </>:<div className='text-center font-bold mt-6'>No List of Booking</div>}
      </div>
      {
        select.length>0&& <div className='w-2/3 relative'>
        <div className='flex bg-base-100 flex-row items-center justify-around mt-2'>
            <div className='flex flex-row items-center gap-4'>
                <span className='text-content font-semibold'>{select[0].book_info.from.split(',')[0]}</span>
                <img src={right_arrow} alt='way of point'/>
                <span className='text-content font-semibold'>{select[0].book_info.from.split(',')[0]}</span>
            </div>
            <strong className='text-head font-bold mt-1'>{select[0].book_info.distance} KM</strong>
            <b className={`text-head border-2 px-2 ${select[0].status=='accept'?'text-green-600':select[0].status=='reject'?'text-red-600':''}`}>{select[0].status}</b>
        </div>
        <div className='w-1/2 h-full flex flex-col gap-2 p-2 mt-4 ml-4'>
            <div className='w-20 h-20 border-2 rounded-2xl overflow-hidden grid place-content-center'>
                <img src={select[0].driver.image||user} alt='driver_img'/>
            </div>
            <div className='flex flex-col ml-2'>
                <b className='text-head font-bold'>{select[0].driver.name}</b>
                <span className='ml-1'>{get_time(select[0].createdAt)}</span>
            </div>
            <div className='font-content'>
                <p>{select[0].driver.gender}</p>
            </div>
            <span className='font-thin text-sup-head'>{select[0].driver.loc}</span>
            <div className='flex flex-row gap-6 mt-4 items-center'>
                <a href={`tel:+91${select[0].driver.number}`}>
                    <div className='w-16 h-16 hover:w-26 hover:h-10 hover:pl-6 pt-2 pl-2 transition-all duration-300 ease-in-out cursor-pointer bg-base-100 border-2 rounded-full'>
                        <img className='m-2 w-1/2 h-1/2 hover:w-10' src={call} alt='call'/>
                    </div>
                </a>
                <a href={`mailto:${select[0].driver.email}`}>
                    <div className='w-16 h-16 hover:w-26 hover:h-10 hover:pl-6 pt-2 pl-2 transition-all duration-300 ease-in-out cursor-pointer bg-base-100 border-2 rounded-full'>
                        <img className='m-2 w-1/2 h-1/2 hover:w-10' src={email} alt='email'/>
                    </div>
                </a>
            </div>
            <div className='flex bg-base-100 flex-row items-center gap-6 ml-6 mt-2'>
              <div className='flex flex-row items-center gap-4'>
                  <span className='text-content font-semibold'>From</span>
                  <img src={right_arrow} alt='way of point'/>
                  <span className='text-content font-semibold'>To</span>
              </div>
              <strong className='text-head font-bold mt-1'>{select[0].book_info.distance} KM</strong>
            </div>
              <p className='text-head font-black'>Pay: <b>{select[0].book_info.amount}</b></p>
            <div className='mt-4 flex flex-row gap-6'>
                <button className='btn hover:border-2'>Report</button>
                <button className='btn hover:border-2' onClick={showbtn}>Rating</button>
            </div>
        </div>
       {show&& <div className='w-1/3 absolute right-2 bottom-2 border-2 h-1/2'>
            <div onClick={()=>setshow(e=>!e)} className='absolute size-8 top-2 z-10 right-2 cursor-pointer'>
                <img src={cancel} alt='cancel'/>
            </div>
            <div className='w-full h-2/3 overflow-y-scroll mt-4'>
                {select[0].driver.rating.length?select[0].driver.rating.map((val,item)=>(<div key={item}><p className='w-fit m-2 h-auto bg-base-content text-base-100 p-2 rounded-r-full'>{val.Comment}</p><b>rat: {val.rat}</b></div>)):''}
            </div>
            <form onSubmit={(e)=>rate(e,{rat:rat,cmd:cmd},select[0].driver._id)} className='w-full pt-6 mt-2 h-20 gap-2 px-2 flex flex-row'>
                <select disabled={rated?true:false} defaultValue={rated==false?'':select[0].driver.rating[0].rat} onChange={(e)=>setrat(e.target.value)} className='w-1/3 h-1/2  dropdown text-sub-head text-center' name='rating'>
                    <option>Rating</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <input type='text' value={cmd} onChange={(e)=>{setcmd(e.target.value)}} className='w-2/3 h-1/2 outline-none border-b-2 p-2' placeholder='Enter your comment' required/>
                <button disabled={btn?true:false} className='btn btn-outline rounded-full' type='submit'><img className='size-4' src={arrow} alt='arrow'/></button>
            </form>
        </div>}
      </div>
      }
    </div>
  )
}

export default Booking_list
