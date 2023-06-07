import { createSlice } from "@reduxjs/toolkit";

export const tutorDataSlice = createSlice({
    name: "tutorData",
    initialState:{
        value:{}
    },
    reducers:{
        setData: (state, action)=>{
            state.value = action.payload.tutorData
        },
        unSetData:(state)=>{
            state.value={}
        }
    }  
})

export const {setData , unSetData} = tutorDataSlice.actions
export default tutorDataSlice.reducer
