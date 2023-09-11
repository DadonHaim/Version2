import { DebugSocket } from "@Dev/Debug";

export default class SocketVer2{
    public socket;

    public constructor(socket){
        this.socket = socket
    }

    public On<T=any>(id:string ,call?:(data?:T)=>void){
        this.socket.on(id,(data)=>{
            DebugSocket(id)
            call(data);
        }) 
    }

    public Emit<T=any>(id:string , data?:T){
        DebugSocket(id)
        this.socket.emit(id,data)
    }

}   