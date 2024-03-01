const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 8000
});

wss.on('connection', (ws)=>{
    console.log("[SERVER] connection()");
    ws.on('message', (message)=>{
        setTimeout(()=>{
            console.log('[SERVER] Received: ' + message);
            setTimeout(() =>{
                ws.send('ECHO: '+ message, (err) => {
                    if(err){ 
                        console.log('[SERVER] error')
                    };
                })
            },1000)
        },1000)
    })
})