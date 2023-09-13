import { LoginSocket, SocketVer2, User } from "./../importAll";
import RegisterSocket from "./RegisterSocket";

export default (socket:SocketVer2)=>{
    let user = new User();
    LoginSocket(socket , user);
    RegisterSocket(socket , user);


}

    