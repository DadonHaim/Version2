import {configureStore} from "@reduxjs/toolkit";
import {createSlice   } from "@reduxjs/toolkit";
import reducers         from "./redusers";

const initialState :IStore = {
    isLogin  : false,
    user     : {},
    mainPage : "Guest",
    subPage  : "Guest-Home"
}


const states  = createSlice({name:"store",initialState,reducers})
const myStore = configureStore({reducer:states.reducer});
const actions = states.actions;

export {actions};
export default myStore;




