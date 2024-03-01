const express = require('express');

const app = express();
const socketIo = require('socket.io');
const server = app.listen('8000',() => {
    console.log('Server is running at http://127.0.0.1:8000');
});



// 設置socket.io
const io = socketIo(server);
io.on('connection',(socket) => {
    
    // 獲取從客戶端發送過來的數據 聊天事件
    socket.on('chat',(data) => {
      console.log('監聽chat事件')
      console.log(data);

      // io.emit會向所有的客戶端發送
      io.emit('chat',data)
    });

    // 獲取從客戶端發送過來的數據 typing事件
    socket.on('typing',(data) => {

      // 廣播事件發送給除自己以外的客戶端
      socket.broadcast.emit('typing',data);
    })
})

app.use(express.static('./'));
