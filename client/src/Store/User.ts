import { createSlice } from "@reduxjs/toolkit";
import User from "../Models/User";
import IUserStore from "../Interfaces/IUserStore"

const initialState :IUserStore={
    user :{}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        set:(state:IUserStore , action:IActionUserStore)=>{   
            if(action.payload.type == "user")             
                state.user = action.payload.newValue;
        }
    }
}) 


export default userSlice

