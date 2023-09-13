import { DebugSocket } from "./../importAll";

export default class SocketVer2{
    public socket;

    public constructor(socket){
        this.socket = socket
    }

    public On<T=any,R=any>(id:T ,call?:(data?:R)=>void){
        this.socket.on(id,(data)=>{
            DebugSocket(id)
            call(data);
        }) 
    }

    public Emit<R=any>(id:server , data?:R){
        DebugSocket(id)
        this.socket.emit(id,data)
    }

}   