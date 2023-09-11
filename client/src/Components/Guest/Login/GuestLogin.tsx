import React from "react"
import { Main } from "../../Global/Container";
import LoginValidation from "../../../Validation/loginValidation";
import { useSocket } from "../../../Socket";
import { useDispatch, useSelector } from "react-redux";
import { PageAction, flagAction, userAction } from "../../../Store/Store";
import User from "../../../Models/User";

const GuestLogin = React.memo((props:IGuestHomeProps)=>{
  let username = React.useRef<any>("");
  let password = React.useRef<any>("");
  let socket   = useSocket()
  let dispatch = useDispatch()
  let isLogin  = useSelector((store:any)=>store.flag.isLogin);
  console.log("isLogin: "+isLogin)

  let [validationMsgs , setValidationMsgs ]= React.useState<ILoginMsgs>({username:"" ,password:"",status:"" });



  const submit = ()=>{
      let send:ILogin = {
        username : username.current.value,
        password : password.current.value,
      }

      LoginValidation(send)
        .Valid(()=>{ 
            socket.emit('client-I-Want-Login',send)
            
            socket.on("server-You-Are-Already-Login", (msgs:ILoginMsgs) =>  setValidationMsgs({...msgs,status:"No Valid"}))
            socket.on("server-Login-No-Valid",          (msgs:ILoginMsgs) =>  setValidationMsgs({...msgs,status:"No Valid"}))
            socket.on("server-I-Login-You",(user:User)=>{
                console.log(user)
                User.CreateToken(user.token)
                dispatch(flagAction.set({type:"isLogin",newValue:true}))
                dispatch(userAction.set({type:"user"   ,newValue:user}))
                dispatch(PageAction.set({type:"thePage",newValue:"Game"}))
                setValidationMsgs({status:"Valid"})
            })
        })
        .NoValid((msgs)=>{
            setValidationMsgs({status:"No Valid",...msgs})
        })
  }
  if(isLogin) return <>אין לך הרשאה להיכנס לפה! צא החוצה יא אגוז!!</>
  return(
      <Main  Grid start="1,11" end="50,41" border>
          <label>username:</label>
          <input ref={username} name="username" type="text"/>
          <span className="validation">{validationMsgs.username}</span>

          <label>password:</label>
          <input ref={password} name="password" type="password"/>
          <span className="validation">{validationMsgs.password}</span>
          
          <input type="button" onClick={submit} value="Login"/>

          <span>{validationMsgs.status}</span>
      </Main>
    )
}) 



interface IGuestHomeProps{}
interface ILogin{
  username : string;
  password : string;
}
interface ILoginMsgs {
  username ? : string;
  password ? : string;
  status   ? : string;
}


export default GuestLogin;

