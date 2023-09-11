import { createSlice } from "@reduxjs/toolkit";

const initialState :IFlags={
    isLogin : false
}

const flagSlice = createSlice({
    name:"flag",
    initialState,
    reducers:{
        set:(state:IFlags , action:IActionFlagStore)=>{   
            if(action.payload.type == "isLogin")     
                state.isLogin = action.payload.newValue;
        }
    }
})


export default flagSlice