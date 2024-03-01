var fs = require('fs');

// fs.readFile("img.png",function(err,data){
//     err? console.log(data) : console.log(data),console.log(data.length + " bytes.");
// })

fs.readFile('img.png',(err,data)=>{
    err? console.log(data) : console.log(data),console.log(data.length = " bytes.");
})