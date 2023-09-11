import { DebugSocket } from "@Dev/Debug";
import User from "@Entities/User/User";
import SocketVer2 from "./Socket";

export function LoginSocket(socket:SocketVer2 , user:User){
 
    //Token 
    socket.On("client-I-Have-Token",(token)=>{
        user = User.GetUserByToken(token); 
        if(user.IsLogin())
            socket.Emit("server-Token-Valid" , user.SendToClinet())
        else
            socket.Emit("server-Token-No-Valid")
    })  


    //LoginForm 
    socket.On("client-I-Want-Login",(data)=>{
        if(user.IsLogin()) 
            socket.Emit("server-You-Are-Already-Login");
        else{ 
            user.Login(data); 
            if(user.IsLogin()) 
                socket.Emit("server-I-Login-You",user.SendToClinet())
            else 
                socket.Emit("server-Login-No-Valid",user.message)
        }
    })


    //RegisterForm
}
