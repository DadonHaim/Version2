import Guest from "./Components/Guest/Guest";
import "./Components/Global/GlobalStyle.css"
import {useDispatch, useSelector} from "react-redux";
import { useSocket } from "./Socket";
import { useEffect } from "react";
import User from "./Models/User";
import { PageAction, flagAction, userAction } from "./Store/Store";


export default function App(){
    let socket   = useSocket()
    let dispatch = useDispatch()

    let thePage = useSelector((store:any)=>store.page.thePage)
    useEffect(()=>{
        let token = sessionStorage.getItem("token");
        if(token)
            socket.emit("client-I-Have-Token",token)
        socket.on("server-Token-Valid",(user:User)=>{
            dispatch(userAction.set({type:"user",newValue:user}))
            dispatch(flagAction.set({type:"isLogin",newValue:true}))
            dispatch(PageAction.set({type:"thePage",newValue:"Game"}))
        })
    })
    if(thePage == "Guest")
        return <Guest/>

    else if (thePage == "Game")
        return <>
            <button onClick={
                ()=>{
                    dispatch(flagAction.set({type:"isLogin",newValue:false}))
                    dispatch(PageAction.set({type:"thePage",newValue:"Guest"}))
                    User.KillToken()  
                }
            }>התנתק</button>
        </>
    
    
    return <></>
} 