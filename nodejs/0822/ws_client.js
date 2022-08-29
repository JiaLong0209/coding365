const WebSocket = require('ws');
let ws = new WebSocket ('ws://localhost:8000/test');

ws.on('open', ()=>{
    console.log("[CLIENT] open()");
    ws.send('Hello');
})

ws.on('message', (message)=>{
    console.log("[CLIENT] Recived: " + message);
})