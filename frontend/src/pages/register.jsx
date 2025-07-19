import React from 'react';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { postuser,loginuser,find_user } from '../slicer/user';
import { useDispatch} from 'react-redux';


const Register = () => {
    const [state,setstate]=useState(true);
    const [data,setdata]=useState({});
    const [select,setselect]=useState(false);
    const dispatch=useDispatch();
    const handlechange=(e)=>{
      setdata((pre)=>({...pre,[e.target.name]:e.target.value}));
      console.log(e);
    }
    const submit=async()=>{
      try{
        if(data && data.password==data.repass ){
          if(select==true){
            delete data.repass;
            let value=await dispatch(postuser(data));
            if(value.payload=="user register successfully"){
              toast.success("Register successfully");
              setstate(true);
              setdata({})
              console.log(state)
            }else{
              toast.error("already exist");
            }
            console.log("fetch",value,"data :",data )
          }else{
            toast("check privacy and policy");
          }
        }else{
          toast.error("password not match");
        }
      }catch(err){
        console.log(err);
        toast.error("somthing went wrong");
      }
    }
    const login=async()=>{
      try{
        if(select==true){
            let value=await dispatch(loginuser(data));
            if(value.payload=="user logined successfully"){
              toast.success("login successfully");
              setdata({})
              await dispatch(find_user())
            }else{
              toast.error("invaid data's");
            }
            console.log("fetch",value,"data :",data )
          }else{
            toast("check privacy and policy");
          }
      }catch(err){
        console.log(err);
        toast.error("something went wrong");
      }
    }
  return (
    <div className='w-full h-full fixed text-primary-content  bg-transparend backdrop-blur-xs flex items-center justify-center  z-60 top-0 left-0'>
      <div className={`card w-1/3 ${state==true?'h-auto text-base-content':'h-1/2 bg-base-content'} px-6 py-2   outline outline-base-content outline-offset-4`}>
        <h1 className='text-head mt-2'>{state==true?'Login':'Register'}</h1>
        <div className='card-body flex flex-col items-start -mt-4'>
            <input name='name' onChange={(e)=>handlechange(e)} placeholder='Enter your name' value={data.name?data.name:''} className={`w-2/3 px-2 py-1 ${state==false?'':'hidden'} tracking-wider outline-none focus:border-b-2 border-primary`} type='text'/>
            <input name='number' onChange={(e)=>handlechange(e)} placeholder='Enter your mobile' value={data.number?data.number:''} className={`w-2/3 px-2 py-1 ${state==false?'':'hidden'} tracking-wider outline-none focus:border-b-2 border-primary`} type='number'/>
            {state==false?<input name='email' onChange={(e)=>handlechange(e)} placeholder='Enter your email' value={data.number?data.email:''} className='w-2/3 px-2 py-1 tracking-wider  outline-none focus:border-b-2 border-primary' type='email'/>:
            <input name='email' onChange={(e)=>handlechange(e)} placeholder='Enter your email' className='w-2/3 px-2 py-1 tracking-wider  outline-none focus:border-b-2 border-primary' type='text'/>}
            <input name='password' onChange={(e)=>handlechange(e)} placeholder='Enter your password' value={data.password?data.password:''} className='w-2/3 px-2 py-1 tracking-wider outline-none focus:border-b-2 border-primary' type='password'/>
            <input name='repass' onChange={(e)=>handlechange(e)} placeholder='Enter your repassword' value={data.repass?data.repass:''} className={`w-2/3 px-2 py-1 ${state==false?'':'hidden'} tracking-wider outline-none focus:border-b-2 border-primary`} type='password'/>
            <button onClick={state==true?login:submit} className='mx-auto mt-1 btn w-1/2 tracking-wider text-btn'>{state==true?'Login':'Register'}</button>
            <button className='mx-auto mt-1 link' onClick={()=>{setstate(!state)}}>{state==true?'Register':'Login'}</button>
            <div className="after:ml-2 after:text-red-800 after:content-['*']">
              <input id='check' onChange={(e)=>setselect(e.target.checked)} name='check' type='checkbox' required className='mr-2'/>
              <label htmlFor='check'><span  className='link'>Privacy and Policy</span></label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
