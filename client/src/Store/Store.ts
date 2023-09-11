import  {configureStore} from "@reduxjs/toolkit";
import pageSlice from "./Page";
import flagSlice from "./Flags";
import userSlice from "./User";


const myStore = configureStore({
    reducer:{
        page : pageSlice.reducer,
        flag : flagSlice.reducer,
        user : userSlice.reducer,
    },
})


export const PageAction = pageSlice.actions
export const flagAction = flagSlice.actions
export const userAction = userSlice.actions

export default myStore

