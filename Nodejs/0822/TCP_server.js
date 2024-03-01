// TCP Transmission Control Protocol
// var net = require('net');

// var server = net.createServer(function (socket){ // socket is who connect this server
//     console.log('someone connects');
// })

// server.listen(6001);//Port or 6001 
// server.on('listening', function(){
//     console.log('Create server on http://127.0.0.1:6001/ ')
// })

// server.on('close', function(){
//     console.log("Sever closed!");
// })



var net = require("net");

var server = net.createServer(function (socket) {
   console.log('someone connects');
})

server.listen(8000);
server.on("listening", function () {
    console.log("Creat server on http://127.0.0.1:8000/ ");
}) 

server.on("close", function () {
  console.log("Server closed!");
})
