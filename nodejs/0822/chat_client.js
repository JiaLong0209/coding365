//客户端socket的設置
var socket = io.connect('http://127.0.0.1:8000');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
var btn = document.getElementById('send');

btn.addEventListener('click',() => {
    console.log('click')
    // 實現客戶端向服務器發送數據
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
});

// 獲取從服務器發送的數據
socket.on('chat',(data) => {
    feedback.innerHTML = "";
    output.innerHTML += `<p><strong>${data.handle}:${data.message}</strong></p>`
})

// typing事件
message.addEventListener('keypress',() => {
    socket.emit('typing',handle.value);
})


// 獲取從服務器廣播的typing事件
socket.on('typing',(data) => {
    feedback.innerHTML = `<p><em>${data}正在输入</em></p>`;
})