import { io } from "socket.io-client";

// export const baseUrl ="http://localhost:5000/api";
export const baseUrl ="https://eduventure.online/api";
export const socketConnection = "wss://eduventure.online"
export const socket = io("wss://eduventure.online");
