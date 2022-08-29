const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(request.url , request.method);
    response.end("Hello World!");
})

const port = 8000;
const ip = "127.0.0.1";

server.listen(port, ip, ()=>{
    console.log(`Server is running at http://${ip}:${port}`);
})