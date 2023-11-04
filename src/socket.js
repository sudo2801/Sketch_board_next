import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketch-board-3h9n.onrender.com' : 'http://localhost:3001'

export const socket = io(URL);