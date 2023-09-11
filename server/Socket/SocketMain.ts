import User from "@Entities/User/User";
import SocketVer2 from "./Socket"
import { LoginSocket } from "./LoginSocket";


export default (socket:SocketVer2)=>{
    let user = new User();
    
    LoginSocket(socket , user);

}

   