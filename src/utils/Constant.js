import { io } from "socket.io-client";

export const baseUrl ="http://localhost:5000/api";
export const socketConnection = "ws://localhost:5000"
export const socket = io("ws://localhost:5000");
