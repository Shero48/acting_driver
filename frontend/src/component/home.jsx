import React, { useState,useEffect } from 'react'
import Sidebar from './sidebar'
import swap from '../assets/swap.png'
import debounce from 'lodash.debounce';
import { useDispatch,useSelector } from 'react-redux';
import {search_loc_res,search_load,travilling} from '../slicer/search'
import axios from 'axios'
import MapView from './map';
import Driver_list from '../pages/driver_list';

const Home = () => {
  const [p_up,setp_up]=useState({});
  const [drop,setdrop]=useState({});
  const [show,setshow]=useState(false);
  const [time,settime]=useState();
  const [click,setclick]=useState(false);
  const dispatch=useDispatch();
  const {search_text,search_result_top,search_result_bottom,search_status}=useSelector(state=> state.search)
  const exchange=()=>{
    const change=p_up
    setp_up(drop);
    setdrop(change);
  }
  const change=(val,type)=>{
   if(type=='top'){
    setp_up(val);
    dispatch(search_loc_res({res:[],type:type})) 
   }else{
    setdrop(val);
    dispatch(search_loc_res({res:[],type:type}))
   }
  }
  document.addEventListener('click',()=>{
    if(search_result_top.length>0 ||search_result_bottom.length>0 || search_loc_res.length>0 || click==true){
      dispatch(search_loc_res([]))
      setclick(false);
    }
  })
  const find_loc=async(text,type)=>{
    dispatch(search_load(true))
    setclick(false);
    try{
      if(!text || click==true ){
      dispatch(search_loc_res([]));
      dispatch(search_load(false));
      return
      }
      var res=await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${text}`)
      click==false?dispatch(search_loc_res({res:res.data,type:type})):dispatch(search_loc_res([]));
    }
    catch(err){
      console.log(err);
    }
  }
  const get_in=(e)=>{
    settime((pre)=>({...pre,[e.target.name]:e.target.value}));
  }
  const book=()=>{
    console.log(p_up,drop)
    if(p_up && drop && time){
      setshow(true);
      dispatch(travilling(time))
      console.log("click")
    }
    return
  }
useEffect(() => {
    console.log("✅ Updated search_result:",search_result_top,search_result_bottom);
  }, [search_result_top,search_result_bottom]);
  return (
    <div className='w-screen h-full p-2 '>
      <div className={`relative h-full top-10 ${show?'overflow-y-scroll':'overflow-hidden'} left-40`}>
        <div className='w-1/3 h-auto border-2 border-base-content rounded-xl px-4 py-2'>
          <h1 className='text-head mt-2 text-primary-content bg-base-content pl-1 rounded-md'>Choose your location</h1>
          <div className='flex flex-col relative items-start gap-2 mt-4'>
              <input value={p_up.display_name} onChange={(e)=>{setp_up(e.target.value);
                find_loc(e.target.value,'top')}} className='w-full p-2 text-content outline-none hover:border-r-2 focus:border-b-2 border-base-content' placeholder='Pickup location'/>
             {search_result_top && click==false && search_result_top.length>0 && (
               <ul className='w-full flex flex-col absolute z-20 top-10 bg-base-100 mt-2 overflow-y-scroll overflow-x-hidden h-30  border-2 rounded-xl p-2 shadow-md'>
                {search_result_top.map((val,item)=>(
                  <li key={item}  className='border-b-1 cursor-pointer text-balance border-base-content hover:bg-base-content hover:text-primary'  onClick={()=>{change(val,"top");setclick(true); console.log(click)}}>{val.display_name}</li>
                ))}
              </ul>
             )}
            <span className='my-2 mx-10 cursor-pointer' onClick={exchange}>
              <img className='size-8' src={swap} alt='swap_image'/>
            </span>
            <input value={drop.display_name} onChange={(e)=>{setdrop(e.target.value); find_loc(e.target.value,'bottom')}} className='w-full p-2 text-content outline-none hover:border-r-2 focus:border-b-2 border-base-content' placeholder='Drop location'/>
            {search_result_bottom && search_result_bottom.length>0 && (
               <ul className='w-full flex flex-col absolute top-34 z-20 bg-base-100 mt-2 overflow-y-scroll overflow-x-hidden h-30  border-2 rounded-xl p-2 shadow-md'>
                {search_result_bottom.map((val,item)=>(
                  <li key={item}  className='border-b-1 cursor-pointer text-balance border-base-content hover:bg-base-content hover:text-primary'  onClick={()=>change(val,"bottom")}>{val.display_name}</li>
                ))}
              </ul>
             )}
             <div className=' w-full grid grid-rows-2 grid-cols-2 justify-center gap-6'>
              <input name='date' onChange={(e)=>get_in(e)} placeholder='Travel date' className='p-2 text-content outline-none hover:border-r-2 focus:border-b-2 border-base-content' type="date" />
              <input name='time' onChange={(e)=>get_in(e)} placeholder='Travel time' className='p-2 text-content outline-none hover:border-r-2 focus:border-b-2 border-base-content' type='time'/>
              <select onChange={(e)=>get_in(e)} className='dropdown w-full' name='gender'>
                  <option defaultValue='Driver gender'>Driver gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
              </select>
              <select onChange={(e)=>{get_in(e); console.log(e)}} className='dropdown w-full' name='vechile'>
                  <option defaultValue='vechile type'>vechile type</option>
                  <option value='car'>car</option>
                  <option value='bike'>bike</option>
                  <option value='auto'>auto</option>
              </select>
             </div>
          </div>
          <button disabled={show == false?false:true} className='mt-2 btn' onClick={()=>book()}>Book Now</button>
        </div>
        {show && <div className='absolute top-2 right-50 w-2/4 h-2/3 border-2 border-base-content overflow-auto'>
          <MapView from={p_up} to={drop}/>
        </div> } 
        {show&&<div className='w-1/3 mt-4 mb-10 h-2/3  overflow-y-scroll bg-base-100 border-2 rounded-md'>
          <Driver_list/>
        </div>}
      </div>

    </div>
  )
}

export default Home
