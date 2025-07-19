import { createSlice } from "@reduxjs/toolkit";


const search=createSlice({
    name:'search',
    initialState:{
        search_km:0,
        search_result_top:[],
        search_result_bottom:[],
        seach_tra:{},
        seach_status:false,
        notify:false,
    },
    reducers:{
        search_location:(state,action)=>{state.search_text=action.payload},
        search_load:(state,action)=>{state.seach_status=action.payload},
        search_loc_res:(state,action)=>{
            action.payload.type=='top'?state.search_result_top=action.payload.res:state.search_result_bottom=action.payload.res
        },
        travilling:(state,action)=>{state.seach_tra=action.payload},
        find_km:(state,action)=>{state.search_km=action.payload},
        state_change:(state,action)=>{
            state.notify=!state.notify
        }
    }
})
export const {search_loc_res,search_location,search_load,find_km,travilling,state_change}=search.actions
export default search.reducer;