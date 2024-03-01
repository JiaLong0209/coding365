var net = require('net')

var server = net.createServer(socket=>{
    var address = server.address();
    var message = 'the server address is '+JSON.stringify(address);

    socket.write(message,()=>{
        var writeSize = socket.bytesWritten;
        console.log(message + 'has send')
        console.log('the size of message is' + writeSize)

    })

    socket.on('data', data=>{
        console.log(data.toString());
        var readSize = socket.bytesRead;
        console.log('the size of data is '+ readSize)
    })

})
server.listen(8000,(err)=>{
    err?console.log(err):console.log('Create server on http://127.0.0.1:8000/ ')
})

// //引入net模組
// const net = require('net');
// //建立TCP伺服器
// const server = net.createServer(function (socket) {
//     console.log('有新的客戶端接入');
// });
// //設定監聽埠
// server.listen(8001, function () {
//     console.log('服務正在監聽中。。。')
// });




// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });