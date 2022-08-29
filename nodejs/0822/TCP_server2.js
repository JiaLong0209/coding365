var net = require('net')
var server = net.createServer((socket)=>{
    console.log('someone connects');
    server.maxConnections = 3;
    server.getConnections((err,count)=>{
        console.log('the count of client is ' + count);
    })

})

server.listen(8000);
server.on('listening',()=>{
    console.log('Create server on http://127.0.0.1:8000 ')
})