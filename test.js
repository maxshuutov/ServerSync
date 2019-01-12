const http = require('http');


const server = http.createServer(handler);



const io = require('socket.io')(server)
console.log(io);