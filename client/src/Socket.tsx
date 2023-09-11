import { io } from 'socket.io-client';
import React, { createContext, useContext } from 'react';



const socket = io('http://localhost:3001'); 
const SocketContext = createContext<any>( undefined as any);

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }:any) {
    return (
        <SocketContext.Provider value={socket}>
        {children}
        </SocketContext.Provider>
    )
}