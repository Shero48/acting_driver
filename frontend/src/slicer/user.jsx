import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { link } from "../utill/link";
import toast from "react-hot-toast";

export const postuser=createAsyncThunk('/register',async(data)=>{
    try{
        const res=await axios.post(`${link}/register`,data);
        if(res.status){
            return res.data;
        }else{
            throw new Error("something went wrong");
        }
    }catch(err){
        console.log(err);
    }
})
export const loginuser=createAsyncThunk('login',async(data)=>{
    try{
        const res=await axios.post(`${link}/login`,data,{withCredentials:true,headers:{"Content-Type":"application/json"}});
        if(res.status==200){
            return res.data
        }
    }catch(err){
        console.log(err);
    }
})
export const find_user=createAsyncThunk('/find',async()=>{
    try{
        const res=await axios.get(`${link}/my_profile`,{withCredentials:true});
        console.log(res);
        if(res.status==404){
            toast.error("go to login");
        }
        return res.data;
    }catch(err){
        console.log(err);
    }
})
export const logout=createAsyncThunk('/logout',async()=>{
    try{
        const res=await axios.get(`${link}/exit`,{withCredentials:true});
        if(res.status==200){
            toast.success('logout success');
        }
    }catch(err){
        console.log(err);
        toast.err('something went wrong');
    }
})
const user=createSlice({
    name:"user",
    initialState:{
     auth_user:{}
    },
    reducers:{
        clear:(state,action)=>{
            state.auth_user={};
        }
    },
    extraReducers:builder=>{
        builder
        .addCase(find_user.fulfilled,(state,action)=>{
            state.auth_user=action.payload?.fetch_user
            console.log(action.payload?.fetch_user)
        })
    }
})
export const {clear}=user.actions
export default user.reducer;
