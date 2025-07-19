import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { driver, link, order } from "../utill/link";

export const list_of_driver=createAsyncThunk("/driver",async(data)=>{
    try{
        const res=await axios.post(`${driver}/driver_list`,data,{headers:{"Content-Type":"application/json"}});
        console.log(res);
        return res.data.data;
    }catch(err){
        console.log(err)
        toast.error("something went wrong")
    }
});
export const book_driver=createAsyncThunk('/book',async({data,id})=>{
    try{
        console.log(data,id);
        const res=await axios.post(`${order}/book_order/${id}`,data,{withCredentials:true})
        console.log(res.data);
        return res.data
    }catch(err){
        console.log(err);
    }
})
export const booking_list=createAsyncThunk('/check',async()=>{
    try{
        const res=await axios.get(`${link}/view_order`,{withCredentials:true});
        console.log(res);
        if(res.status==200){
            return res.data
        } 
    }catch(err){
        console.log(err);
    }
});
export const rating=createAsyncThunk('/rate',async({data,id})=>{
    try{
        const res= await axios.post(`${driver}/rate/${id}`,data,{withCredentials:true});
        console.log(res);
        if(res.status==200){
            toast.success('rated');
            return true;
        }
    }catch(err){
        console.log(err);
        toast.error('something went wrong');
    }
})

const driver_list=createSlice({
    name:"driver",
    initialState:{
        driver_list:[],
        order_list:[]
    },
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(list_of_driver.fulfilled,(state,action)=>{
            state.driver_list=action.payload;
        })
        .addCase(booking_list.fulfilled,(state,action)=>{
            state.order_list=action.payload;
        })
    }
})
export default driver_list.reducer