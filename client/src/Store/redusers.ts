import { User } from "../importAll";

const reducers = {
    setIsLogin : (state:IStore , action:IAction<boolean>)=>{
        state.isLogin   = action.payload;
        state.mainPage  = "Game";
        state.subPage   = "Guest-Home";
    },
    setUser     : (state:IStore , action:IAction<User>)         => {state.user     = action.payload},
    setMainPage : (state:IStore , action:IAction<AllMainPages>) => {state.mainPage = action.payload},
    setSubPage  : (state:IStore , action:IAction<AllSubPage>)   => {state.subPage  = action.payload},
}

export default reducers

