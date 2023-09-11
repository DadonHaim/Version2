import { createSlice } from "@reduxjs/toolkit";

const initialState :IPageStore={
    thePage : "Guest",
    subPage : "Guest-Home"
}

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        set:(state:IPageStore , action:IActionPageStore)=>{   
            if(action.payload.type == "thePage")            state.thePage = action.payload.newValue;
            else if(action.payload.type == "subPage")       state.subPage = action.payload.newValue;
        }
    }
})


export default pageSlice