require('module-alias/register')
console.clear()
import express          from 'express';
import http             from 'http'; 
import SocketVer2 from './Socket/Socket';
import CrossMidlleWare  from '@MiddleWares/Cross';
import clientStart from "./Socket/SocketMain" 
const { Server } = require("socket.io");

const app    = express();
const server = http.createServer(app).listen(3001);

app.use(CrossMidlleWare)




const io = new Server(server,{cors: {origin: "*", methods: ['GET', 'POST']}});
io.on("connection",(client)=>{
    console.log("connection")
    clientStart(new SocketVer2(client))
})