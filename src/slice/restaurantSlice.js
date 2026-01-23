import { createSlice } from "@reduxjs/toolkit";



const restaurantSlice = createSlice({
    name : "restaurant",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state , action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state , action)=>{
            state.items = state.items.filter((item)=>{
                return item.id!== action.payload
            })
        }
    }
})


export default restaurantSlice.reducer;


export const {addItems , removeItem} = restaurantSlice.actions;