import socketIOClient from 'socket.io-client';

const endpoint = "http://localhost: 3993"

export const socket = socketIOClient(endpoint)