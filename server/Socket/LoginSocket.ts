import { SocketVer2, User, UserModel } from "./../importAll";


export default function LoginSocket(socket:SocketVer2 , user:User){
 
    //Token 
    socket.On<client,string>("Start-With-Token",(token)=>{
        user = User.GetUserByToken(token); 
        if(user.IsLogin())
            socket.Emit<UserModel>("Start-Token-Valid" , user.SendToClinet())
        else
            socket.Emit("Start-Token-No-Valid")
    })  


    //LoginForm 
    socket.On<client,ILogin>("Login-Me",(data)=>{
        if(user.IsLogin()) 
            socket.Emit("Login-You-Are-Already");
        else{ 
            user.Login(data); 
            if(user.IsLogin()) 
                socket.Emit<UserModel>("Login-You",user.SendToClinet())
            else 
                socket.Emit<ILoginMsgs>("Login-No-Valid",user.message.login)
        }
    })


    //RegisterForm
}
